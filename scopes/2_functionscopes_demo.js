function print(){
    var x = 10;// the variable is only valid for the function and inside the function only 
    console.log("the number is :" , x)

    function test(){
        console.log(" the marks is ", x)
    }

    console.log(x)

}


// console.log(x) 
// we cant access the var x outside the function this is called as the function scopes
