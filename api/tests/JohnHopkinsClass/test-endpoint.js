

const chai = require('chai');
const chaiHttp = require('chai-http'); 
const should = chai.should(); 
chai.use(chaiHttp);

/**grab the query results we know are valid.  */
const  validQueries = require('./validQueryResults');
const validResults = [];
for(let query in validQueries){
    validResults.push(validQueries[query].res);
}

const host = 'https://webhooks.mongodb-stitch.com';

const JHR = require('../../api-requests/john-hopkins-univ.js');

const testQueries = [
    JHR.getHostAndRoute({

        queryType : JHR.queryType.US_ONLY,
        minDate : new Date(2020, 08, 27), 
        maxDate : new Date(2020, 08, 27),
        hideFields : '_id,date,country,combined_name,fips'
    }),

    JHR.getHostAndRoute({
        queryType : JHR.queryType.US_ONLY,
        state : 'Washington',
        minDate : new Date(2020, 04, 25), 
        maxDate : new Date(2020, 04, 25),
        hideFields : '_id, uid, country_iso2,country_iso3, country_code, loc'
    }),

    JHR.getHostAndRoute({
        queryType : JHR.queryType.GLOBAL, 
        minDate : new Date(2020, 09, 08),
        maxDate : new Date(2020, 09, 08),
        country : 'France', 
        state : 'Guadeloupe',
    })

]


testQueries.forEach((query, index) => {
    console.log('query:', query);
    describe(`Running test${index}: Testing:${query.route}`, ()=>{
        it('It should return a stringified JSON', done => {
    
            // console.log('\n\n\thost',validQueries.filterByCountryFrance.host,'\n\n' );
            // console.log('\n\n\troute',validQueries.filterByCountryFrance.route,'\n\n\t');
            chai.request(query.host)
                .get(query.route)
                .end((err,res) => {
                    res.should.have.status(200);
                    res.text.length.should.be.greaterThan(0);
                    // res.text.should.be.equal(JSON.stringify(validResults[index]));
                });
            done();
        })
    
    });
});



// const valid = toArrayOfHash(validQueries); 
// const test = toArrayOfHash(testQueries); 

// console.log('testing');

// valid.forEach((elm, i) => {
//     for(p in elm){
//         console.log(test[i][p]);
//         if(!test[i][p])
//             console.log('fail valid > test:', p);
//     }
// });

// test.forEach((elm, i) => {
//     for(p in elm){
//         if(!valid[i][p])
//             console.log('fail test > valid:', p)
//     }
// })

// console.log('done');
