let arr = [1,2,3,4,5,6,7,8];
let x =arr.map(function proccess(v,i){ // map is the in built function of the js which needs to a callback function with the parameter 
    // v and i which represents the value and index of the each element in the array .


    
    /**
     * v -> value of element 
     * i -> index of the element 
     */

    console.log(v,i);
    return v * v; // callback function needs to return something when it called.

});

console.log(x);
console.log(arr);