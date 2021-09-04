/**
 * 
 * Author BJ Rutledge 
 * Date 8/20/21
 * Zipcode API 
 */


class Zipcode {
    
    /** Enumerator:  */
    static duration = {
        DAILY : 0,
        WEEKLY : 2,
        MONTHLY : 4
    }

    static infoType = {
        NEW_CASES : 0, 
        DEATHS : 2
    }

    /**
     * 
     * @param {String} zipcode zipcode (zip or zipcode + 4)
     * @param {Number} duration Use duration enum Zipcode.***
     * @param {Number} infoType use infoType enum infoType.***
     * @returns {Object} data
     * @example const data = getData('98222-2211', duration.DAILY, infoType.NEW_CASES);
     */
    static getData(zipcode, duration, infoType){

    }

    /**
     * 
     * @param {String} zipcode zipcode 
     * @returns {Boolean}
     */
    static isValidZip(zipcode){

    }

    /**
     * @param {String } zipcode
     * @returns {Boolean}
     */
    static #isZipPlusFour(){

    }

    /**
     * Private handles zip plus four 
     * @param {string} zipcode zipcode
     */
    static #handleZipPluseFour(zipcode){

    }
}