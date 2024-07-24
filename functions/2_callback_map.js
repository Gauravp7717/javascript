let arr = [1,2,3,4,5];

let x= arr.map(function add(v,i){
    console.log(v ,i); // here v is passed as the element of the array and i is as the index 
    return v*v;
})

console.log(x)
console.log(arr)