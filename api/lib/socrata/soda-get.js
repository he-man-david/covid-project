/**Created by BJ Rutledge
 * 10/02/21
 * Interface for CDC Provisional data 
 * by age and sex. 
*/
//TODO there is a vaccine hesitancy page on the cdc that is 
//TODO cool, see if we can pipe the map in. 


const Socrata = require('node-socrata'); 
/**
 * Node Socrata GET requests. 
 * @method get performs a get request. 
 */ 

class SocrataGet{

    soda; 
    data;
    error; 
    config = {
        hostDomain : process.env.SOCRATA_HOST_DOMAIN,
        //table at host 
        resource : '',
        //authenticaion creds. 
         xAppToken : process.env.SCORATA_API_TOKEN
    };

    query = {
        //default limit of 1000 records
        $limit : 10000
    };


    constructor(config, query){
        // if(process.env.NODE_ENV == 'development'){
        //     //only break if we're in dev mode. 
        //     //Yeah, this breaks the cardinal rule of 
        //     //putting something that will break in a constructor, but... good for debugging
        //     if(!config || !config.resource) 
        //         throw new Error('Invalid Argument. Need config object. {resource :\'myResource\'');
        //     else{ 
        //         this.error = new Error(`Error! Invalid Arguments. Need config object. SocrataGet constructor. `)
        //         console.log(error);
        //     }
        // }
        this.config = Object.assign(this.config, config); 
        this.query = Object.assign(this.query, query || {});
        this.soda = new Socrata(this.config);
    }

    get(params, callback){
        if(this.error) 
            return this.error;

        params = params || this.query;
            this.soda.get(params, callback? callback: (err, res, data) => {
            console.debug('err:', err);
            console.debug('res:',res);
            console.debug('data:', data);

            this.data = data;  
            if(err){
                this.error = err; 
            }
        });
        /*return the data or an error*/
        return this.data? this.data:( this.error? this.error: null); 
    }
    
}//close class

module.exports = SocrataGet; 