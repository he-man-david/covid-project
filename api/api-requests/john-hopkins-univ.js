'use strict'; 

/**
 * GET request builder for the 
 * John Hopkins University covid-19 
 * REST API. 
 * @method UsOnly 
 */
module.exports = class JohnHopkinsRequest{

    static host = 'https://webhooks.mongodb-stitch.com';
    
    static routes = {
        usOnly : '/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/us_only',
        global : '/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global',
        metadata : '/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata',
        countriesSummary :  '/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary'
    };
    

    /**Type of query.
     * * Used to index into endpoints object.
     */
    static queryType = {
        US_ONLY : 'usOnly',
        GLOBAL : 'global',
        METADATA : 'metadata',
        SUMMARY : 'countriesSummary'
    };
    
    /**
     *  Default options for a general query. The options object will be used to build any query to the John Hopkins API. 
     * The properties are used as parms in the GET request for the API endpoint. 
     * Default hidden fields. These are fields in the database that  
     * we just don't need, so we pass that along to the api and they 
     * get pruned from the result before sending back to us. 
     * @returns object: 
     * @property queryType : JohnsHopkinsRequest.queryType.US_ONLY (0)
     * @property uid : 16
     * @property state : 'wa'
     * @property county : 'king'
     * @property country : 'USA' 
     * @property minDate : today 
     * @property maxDate : today (if the min and maxDate are the same, we get the data for that one day)
     * @property hideFields : JohnsHopkinsRequest.#hideFields ('_id, uid combined_name, fips')
     * TODO figure out what the uid being set to 16 does. Why is it set like that in the documentation? 
     */
    static defaultOptions (){
        /** because we're using Object.assign method to combine user 
         * options with defaults, we use a method that returns an object
         * rather than just defining a static object, as the defaults 
         * would be overridden every time we call assign.*/
        return Object.create( {
            queryType: 'usOnly',    
            country: 'USA', minDate: new Date(), 
            maxDate: new Date(), 
            hideFields: '_id, date, country, combined_name, fips, uid'
        });
    }

    
    /**
     * 
     * @param {Object} options Options object. See JohnHopkinsRequest.defaultOptions object for example 
     */
    static getEndpointString(options){
        /*
         * We want to pull in the defaults and override them with any 
         * user passed information. I've tested the endpoints. It's ok
         * if we pass params that are not used, they will just be ignored. */
        Object.assign(this.defaultOptions(), options);
        const res = `${this.endpoints[options.queryType]}${this.routes[options.queryType]}?${this.#getQuery(options)}`;         
        return res;
    }//end getEntryPoint


    // static getHostnameAndPath = options => {host : this.host, route : { `${this.routes[options.queryType]}?${this.#getQuery(options)}`};
    static getHostAndRoute(options){
        Object.assign(this.defaultOptions(), options); 
        const host = this.host;
        const route = `${this.routes[options.queryType]}?${this.#getQuery(options)}`;
        return {host, route};
    }

    /**
     * Get ISO string from date 
     * @param {Date} date valid date object or date string 
     * @returns ISO date string 
     */
    static #dateToIsoString(date){
        if(typeof date == 'object'){
            return date.toISOString().split('T')[0];
        }   
        if(date != 'string'){
            throw new Error('Invalid date passed. Must be either a date or string Date.toString');
        }
        
        try {
            //just in case the date string has a time value not zero
            return new Date(date).toISOString().split('T')[0];    
        } catch (error) {
            throw new Error('Invalid date passed. Date passed must either be a string or a Date object.', error);
        }
    }

    /**
     * Get query string.
     * @param {Object} options Options object. Must pass a basic js object with the following one 
     * or all of the following properties: 
     * uid, state, county, country, minDate, maxDate, hideFields. Note: the queryType property may be ommited, as this method 
     * is for us only queries. 
     * @example unitedStatesOnly({state: 'CA', county: 'Los Angles', minDate: date1, maxDate: date2, hideFields: 'country, state' });
     */
    static #getQuery(options){
        let res = '';
        for(let opt in options){
            /* there may not always be a state, country or county option, 
             * so we need to check to make sure it's there, first.*/
            if((opt == 'state' || opt == 'county' || opt == 'country') && options[opt] ){
                res += `${opt}=${options[opt]}&`
            }
            else if(opt == 'minDate' ){
                res += `min_date=${this.#dateToIsoString(options[opt])}&`
            }
            else if(opt == 'maxDate'){
                res += `max_date=${this.#dateToIsoString(options[opt])}&`;
            }
            else if(opt == 'hideFields'){
                res += `hide_fileds=${options[opt]}&`;
            }
        }//close for 
        return res;
    }
    
}//close class 