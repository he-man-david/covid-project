/**
 * Created by BJ Rutledge 
 * 10/1/21
 */
'use strict'

//todo need to move this to the SoQL lib. It's going to be usable elsewhere 
const {getQuery, combineQueries} = require('../lib/cdc/cdc-provisional-death-by-age-sex');
const CDCProvisional = require('../lib/Soda/'); 
// const SodaGet = new require('../lib/socrata/soda-get');

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers

  app.get('/', (req, res) => {
    res.locals.name = 'covid-project';
    res.send('Hello from the covid-data-project api. For info on the project, or if you would like to contribute, please contact bjrutledge@outlook.com. ');
  });

  app.get('/cdc-provisional', (req, res) => {

    res.locals.name = 'covid-project';

    //TODO add logic for combined queries. To start, we're just doing a single query
    const query = getQuery(res.query.clause, res.query.field, res.query.operand, res.query.value); 
    var dataOut = {}; 

    CDCProvisional.get(query, (err, result, data) => {
      //TODO Do a CBA to see if it's better to build the chart her pass that off to the user. 
      res.send(data? data: {error: {message: 'No data was retrieved. Please try again.'}}); 
    });
    console.debug('data out', dataOut); 
    
  });

}
