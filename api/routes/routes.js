'use strict'
module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', (req, res) => {
    res.locals.name = 'covid-project';
    res.send('Hello from the covid-data-project api. For info on the project, or if you would like to contribute, please contact bjrutledge@outlook.com. ');
  });

  
}


