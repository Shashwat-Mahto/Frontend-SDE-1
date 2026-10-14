const arr = [1,2,3,4,5];
Array.prototype.myMap = function(cb , thisArg){

    if(this === null){
        throw new TypeError("myMap called on null or undefined")
    }

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

const result = arr?.myMap((curr , index , arr)=> curr*2)
console.log("map" , result);


