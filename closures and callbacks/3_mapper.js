function mapper(arr , fn){
    /**
     * arr -> is the array of elements
     * fn  -> is required the function with the parameter value and index of the array contain.
     * not using the in built function for mapping over the array .
     */

    let result = [];

    for (let i =0 ;i<arr.length ;i++){
        // i - > index and arr[i] -> value


        let res = fn(arr[i],i);
        result.push(res);
    }

    return result;
}


let arr = [1,2,3,4,5];
let x  = mapper(arr , function cuber(v , i){
    console.log(v, v*v*v, i);
    return v*v*v;
})
