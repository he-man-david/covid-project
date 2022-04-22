/** Created by BJ Rutledge 
 * 10/1/21
 * SoQL helpers 
 */

//TODO Need to dig into SoQL and build out helpers. It could be that this exists aleready. Keep eye
/**Static class of simple helpers  */
module.exports = class SoQL{

    static phrase = {
        select: 'select',
        from: 'from',
        where: 'where', 
        order: 'order',
        group: 'group',
        limit: 'limit', 
        offset: 'offset', 
        q: 'q'
        //todo add clauses 
    }

    static operand = {
        eq: '=',
        gt: '>',
        gte: '>=',
        lt: '<',
        lte: '<=',
        notEql: '!=',        
    }
 
}