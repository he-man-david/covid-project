'use strict';
/**Created by BJ Rutledge 
 * 12/24/21
 * Format chart data for ChartJs object. 
 */
import {colors} from './chart-colors';
import {getType} from './general/getType';
/**Example data 
 *  {
    data_as_of: '2021-12-22T00:00:00.000',
    start_date: '2020-01-01T00:00:00.000',
    end_date: '2021-12-18T00:00:00.000',
    group: 'By Total',
    state: 'California',
    sex: 'Female',
    age_group: '50-64 years',
    covid_19_deaths: '5498',
    total_deaths: '37989',
    pneumonia_deaths: '5423',
    pneumonia_and_covid_19_deaths: '3525',
    influenza_deaths: '84',
    pneumonia_influenza_or_covid: '7479'
  }
 */
/**Data object  */
const data =  {
    data_as_of: null,
    start_date: null,
    end_date: null,
    group: null,
    state: null,
    sex: null,
    age_group: null,
    covid_19_deaths: null,
    total_deaths: null,
    pneumonia_deaths: null,
    pneumonia_and_covid_19_deaths: null,
    influenza_deaths: null,
    pneumonia_influenza_or_covid: null
}

const provisionalDataLables = {
    covid_19_deaths: 'Covid 19',
    pneumonia_deaths: 'Pneumonia',
    pneumonia_and_covid_19_deaths: 'Pneumonia & Covid 19',
    influenza_deaths:'Influenza',
    pneumonia_influenza_or_covid: 'Pneumonia Influenza or Covid 19'
};


const formatDataCdcProvisionalByState = (dataIn, typeChart) => {
    const data = {
        lables = [],
        datasets: []
    };
    let i = 0;
    for(let key in provisionalDataLables){
        /**push lable and assign color properties for the dataset */
        data.datasets.push(Object.assign({
                lablel: provisionalDataLables[key], 
                borderWidth: 1,
                //data value will be under the property 
                //name of the key 
                data: [dataIn[key]]
            }, colors[i])
        )
        i++;
    }
}

/**
 * The data values that we receive from the CDC are filtered by 
 * State and age group. We receive an object record for each 
 * state and age grou, where the values are stored in object 
 * properties. ChartJS requires that the values be placed 
 * in an array for each label (in this case, each lable is a State 
 * in the United States). 
 * For example: 
 * we receive the following: 
 * arizona: object -> propA: dataValueA, propB: dataValueB, propC: dataValueC
 * California: object -> propA: dataValueA, propB: dataValueB, propC: dataValueC
 * washington: object -> propA: dataValueA, propB: dataValueB, propC: dataValueC
 * We must convert this to: 
 * labels ['arizona', 'california', 'washington']
 * data {
 *      arizona: [datavalueA, dataValueA, dataValueA],  
 *      California: [datavalueB, dataValueB, dataValueB], 
 *      Washington: [datavalueC, dataValueC, dataValueC], 
 * }
 * 
 * This function takes an array objects, and creates an object of 
 * key value pairs, where the key is the state and the 
 * value is the array of data values.
 * 
 * @param {Object} dataIn data object receied form CDC 
 */
const createDataAraysByStateObject = (dataIn, dataLables) => {
    //set start state 
    const data = {};
    

}

export default createDataAraysByStateObject; 