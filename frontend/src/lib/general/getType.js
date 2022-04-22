/**
 * Get the type name of an object 
 * @param {Object} obj object 
 * @returns string Type of object 
 */
const getType = (obj) => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase(); 

  export default getType; 