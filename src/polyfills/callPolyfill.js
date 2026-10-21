const villian = {
    name:"Duryodhan"
}

const anotherVillian = {
    name:"Karn",
}

function showVillian(message){
    return `Villian is ${message} ${this.name}`
    
}

Function.prototype.myCall = function(thisArg , ...args){

    /**
     * this argument can be null and if we pass a anything rather than object
     * call converts it into an object
     */


    thisArg = thisArg == null ? globalThis : Object(thisArg);

    const fnKey = Symbol("fn");
    thisArg[fnKey] = this // function
    
    try {
        return thisArg[fnKey](...args)
    } finally{
        delete thisArg[fnKey];
    }

}

 const res = showVillian.myCall(anotherVillian , "Surya Putra");
 console.log("call" , res);
 