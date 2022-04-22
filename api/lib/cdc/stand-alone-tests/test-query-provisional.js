/** simple stand-alone test of query functionality  */


//need to pull in env test runs from the dir of test file 
const path = require('path'); 
require('dotenv').config({path: path.join(__dirname, '../../../.env')});

const dataSets = require('../cdc-data-sets');
const SocrataGet =  require('../../socrata/soda-get');
const soda = new SocrataGet ({resource : dataSets.provisionalDeathsBySexAndAge});
const SoQL = require('../../socrata/SoQl'); 
const {getQuery, combineQueries} = require('../cdc-provisional-death-by-age-sex');
const States = require('../../states'); 

// console.log(getQuery('select', 'covid_19_deaths'))


let query = combineQueries(
    [
        getQuery(SoQL.phrase.where, 'state', SoQL.operand.eq, States.WA),
        getQuery(SoQL.phrase.where, 'sex', SoQL.operand.eq, 'Male'),
        getQuery(SoQL.phrase.where, 'sex', SoQL.operand.eq, 'Female'),
    ]
); 


soda.get(query);

