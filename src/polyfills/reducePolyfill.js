const nums = [1,2,3,4];
Array.prototype.myReduce = function(cb , initalValue){

    if (this == null) {
        throw new TypeError(
            "Array.prototype.myReduce called on null or undefined"
        );
    }

    
    if(typeof cb !== 'function'){
        throw new TypeError("cb must be a function");
    }

    let hasInitialValue = arguments.length>=2;
    let arr = this;
    let accumulator;
    let index = 0;


    if(hasInitialValue){
        accumulator = initalValue;
    }else{
       while(index < arr.length && !(index in arr)){
         index++;
       }

       
       if(index >= arr.length){
        throw new TypeError("Reduce of an empty array with no initial Value")
       }

       accumulator = arr[index];
       index++;
    }

    for( index ; index<arr.length ; index++){
        if(index in arr){
            accumulator = cb(accumulator  , arr[index] , index , arr);
        }
       
    }

    return accumulator

}

const result = nums?.myReduce((acc , curr)=>{
    return acc+=curr;
} , 0)

console.log("reduce" , result);
