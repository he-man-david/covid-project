
class tst{
    static prop = {name:'joe' , o:{b:'another object'}}
    static assign(o){
        // return Object.assign(JSON.parse(JSON.stringify(this.prop)), o); 
        // return Object.assign(Object.create(this.prop), o); 
        
    }
}

console.log('prop is:',tst.prop)
console.log('calling assign', tst.assign({prop:'this is the new prop', o :  {b:'oh shit check'}}))
console.log('prop is:',tst.prop)