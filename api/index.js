'use strict'

require('dotenv').config();

console.log('process env', process.env);

const express = require('express')
const app = express();

const httpErrors = require('http-errors')

const path = require('path');

const cors = require('cors');
app.use(cors());

const ejs = require('ejs');
const pino = require('pino');
const pinoHttp = require('pino-http');

module.exports = function main(options, cb) {
  // Set default options
  const ready = cb || function () { }
  const opts = Object.assign({
    // Default options
    port: 3000,
    host: null
    // account for if nulln options is passed.
  }, options? options: {});

  const logger = pino();

  // Server state
  let server;
  let serverStarted = false;
  let serverClosing = false;

  // Setup error handling
  function unhandledError(err) {
    // Log the errors
    logger.error(err);

    // Only clean up once
    if (serverClosing) {
      return;
    }
    serverClosing = true;

    // If server has started, close it down
    if (serverStarted) {
      server.close(function () {
        process.exit(1);
      });
    }
  }

  process.on('uncaughtException', unhandledError);
  process.on('unhandledRejection', unhandledError);


  // Template engine
  app.engine('html', ejs.renderFile)
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'html')

  // Common middleware
  // app.use(/* ... */)
  app.use(pinoHttp({ logger }));

  // Register routes
  // @NOTE: require here because this ensures that even syntax errors
  // or other startup related errors are caught logged and debuggable.
  // Alternativly, you could setup external log handling for startup
  // errors and handle them outside the node process.  I find this is
  // better because it works out of the box even in local development.
  require('./routes/routes')(app, opts);

  // Common error handlers
  app.use(function fourOhFourHandler(req, res, next) {
    next(httpErrors(404, `This AIP now has viable HTML content. Please visit www.covidproject.us`));
  });

  app.use(function fiveHundredHandler(err, req, res, next) {

    if (err.status >= 500) {
      logger.error(err);
    }

    res.locals.name = 'covid-project';
    res.locals.error = err;
    //TODO 
    res.status(err.status || 500).send(`Oops! We messed up somewhere!`);
    //.render('error');
  });

  // Start server
  server = app.listen(opts.port, opts.host, function (err) {
    if (err) {
      return ready(err, app, server);
    }

    // If some other error means we should close
    if (serverClosing) {
      return ready(new Error('Server was closed before it could start'));
    }

    serverStarted = true;
    const addr = server.address();
    
    logger.info(`Started at ${opts.host || addr.host || 'localhost'}:${addr.port}`);

    ready(err, app, server);
  });
}

