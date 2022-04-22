/** Created By BJ Rutledge
 * 12/23/21 
 * Format query to be consumable by cdc lib.
 */
//Paused on writing this because should not need it 12/24/21

/**iterate through all properties of the query object. 
 * when we encounter a kv pair, where the value is 'string' 
 * the operand is =, where the value is an object, the 
 * property name is the operand in text form (eg. gt, lt, etc.), 
 * so, we need to swap the text with the actual operand. 
 */
const formatQueryReceived = (query) => {

    const res = [];

    for(const [key, val] of query){
        if(typeof key == 'object'){
            for(const [k, v] of key){
                
            }
        }else{

        }
    }
}

