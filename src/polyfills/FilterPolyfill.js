const nums = [1, 2, 3, 4, , 5];

Array.prototype.myFilter = function (cb , thisArg) {


  if (typeof cb !== "function") {
    throw new TypeError("cb must be a function");
  }

  let arr = this;
  let result = [];

  for(let i = 0 ; i<arr.length ; i++){
    if(i in arr){
        const val = cb.call(thisArg , arr[i] , i , arr);
        if(val){
            result.push(arr[i]);
        }
    }
  }

  return result;


};


const result = nums.myFilter((curr) => curr % 2 === 0);
console.log("filter", result);
