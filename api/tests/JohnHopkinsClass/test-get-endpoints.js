

let desiredResults = [
    //us one day with hidden fields 
    'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/us_only?min_date=2020-04-27T00:00:00.000Z&max_date=2020-04-27T00:00:00.000Z&hide_fields=_id, date, country, combined_name, fips, uid'
]


const JHR = require('../api-requests/john-hopkins-univ');

//default query 
const defaultQry = JHR.getEndpoint({});

    //LA County 
const countyQuery = JHR.getEndpoint({
    county: 'Los Angles', 
    state : 'CA', 
    minDate : new Date(2020, 04, 27), 
    maxDate : new Date(2020, 04, 27)
});

//international 
const internationalQuery = JHR.getEndpoint({
    queryType : JHR.queryType.GLOBAL, 
    country : 'France', 
    state : 'Guadeloupe',
});

