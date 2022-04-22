/**Created by BJ Rutledge 
 * 4/22/22
 * Soda helpers 
 */
const dataSets = require('../cdc/cdc-data-sets');
const Socrata = require('node-socrata'); 



const configProvisional  = {
    hostDomain : process.env.SOCRATA_HOST_DOMAIN,
    //table at host 
    resource : dataSets.provisionalDeathsBySexAndAge,
    //authenticaion creds. 
     xAppToken : process.env.SCORATA_API_TOKEN
};

module.exports = new Socrata(configProvisional); 
