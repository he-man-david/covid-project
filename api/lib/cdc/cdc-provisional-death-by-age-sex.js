


module.exports = class ProvisionalDeathsBySexAndAge{
    
    static queriesFields = {
        dataAsOf : 'data_as_of',
        startDate : 'start_date',
        endDate : 'end_date',
        group : 'group', 
        year : 'year', 
        month : 'month', 
        state : 'state',
        sex : 'sex', 
        ageGroup : 'age_group', 
        covidDeaths : 'covid_19_deaths', 
        totalDeaths : 'total_deatha', 
        pneumoniaDeaths : 'pneumonia_deaths', 
        pneumoniaAndCovidDeaths : 'pneumonia_and_covid_19_deaths',
        influnzaDeaths : 'influenza_deaths', 
        pneumoniaInflunenzaOrCovid : 'pneumonia_influenza_or_covid',
        deaths : 'deaths'
    };
    
    /**when querying by age group, we must use the exact string that is 
     * in the data set, otherwise we'll eiher get everything or nothing. 
     */
    static ageGroup = {
        allAges : 'All Ages',
        underOne :'Under 1 year',
        zeroToSeventeen : '0-17 years',
        oneToFour : '1-4 years',
        fiveToFourteen : '5-14 years',
        fifteenToTwentyfour : '15-24 years',
        eighteenToTwentynine : '18-29 years',
        twentyfiveToThirtyfour : '25-34 years',
        thirtyToThirtynine : '30-39 years',
        thirtyFiveToFourtyFour : '35-44 years',
        fourtyTofourtynine : '40-49 years',
        fourtyfiveToFiftyfour : '45-54 years',
        fiftyToSixtyfour : '50-64 years',
        fiftyfiveToSixtyfour : '55-64 years',
        sixtyFiveToSeventyfour : '65-74 years',
        seventyfiveToEightyfour : '75-84 years',
        eightyfiveAndOver : '85 years and over'
    }


    static queryDataTypes = {
        dataAsOf : 'string',
        startDate : 'string',
        endDate : 'string',
        group : 'string', 
        year : 'number', 
        month : 'string', 
        state : 'string',
        sex : 'string', 
        ageGroup : 'string', 
        covidDeaths : 'number', 
        totalDeaths : 'number', 
        pneumoniaDeaths : 'number', 
        pneumoniaAndCovidDeaths : 'number',
        influnzaDeaths : 'number', 
        pneumoniaInflunenzaOrCovid : 'number',
        deaths : 'number'
    };

    /**
     * Get SoQl query object. The format is a little wonky and 
     * makes for easy errors, so this helper function will build 
     * the query in the proper format. 
     * @param {string} clause Query clause (where, slect, etc.)
     * @param {string} field field in data set, e.g. start_date
     * @param {string} operand evaluation operand =, <, >, etc.  
     * @param {string} value value to be queried against.
     * @returns SoQl query object. 
     * @example getQuery('$where', 'age_group', '=', '45-54 years'); 
     *  returns {$where : 'age_group=\'45-54 years\''}
     */
    static getQuery(clause, field, operand , val ){
        let query = {};
        console.debug(arguments);
        Object.defineProperty(query, clause, {
            //if we don't have a value, then just set the field. This 
            //accounts for select clauses 
            value : (val?  `${field}${operand}'${val}'` : field), 
            writable : true,
            //property won't be accessable to receiver if not 
            //enumerable  
            enumerable : true
        });
        return query;
    }

    /**
     * Combine an array of query objects into a single object
     * @param {object[]} queries Array of queries 
     * @returns Single query object 
     */
    static combineQueries = (queries) => Object.assign(...queries); 
    
}//close class 