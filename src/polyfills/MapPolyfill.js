const arr = [1,2,,3,4]
Array.prototype.MyMap = function(cb , thisArg){

    if(typeof cb!== "function"){
        throw new TypeError("cb must be a function");
    }

    let result = [];
    let arr = this

    for(let i = 0 ; i<arr.length ; i++){
        if(i in arr){
            result[i] = cb.call(thisArg , arr[i] , i , arr)
        }
    }

    return result;


}

const result = arr?.MyMap((curr , index , arr)=> curr*2)
console.log("map" , result);


