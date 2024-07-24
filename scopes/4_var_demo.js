
// case 1

{
    var x = 10; // the variable is now can access globally 
/**
 * var doesnt care about the blocks
 * it just restricted by the functions or we can say function scope
 */
    console.log(x)  // it is now global deu to var

}

console.log(x)


// when we'll rap it inside any funtion it wont be visible outside the function for the rest



// case 2

function fun(){
    console.log(y) // here we are getting the undefined ? deu to lexical scoping 
    var y  = 5;
    console.log(y)
}

fun();

 


var h = 10;

function fun1(){
    var h = 1;
    console.log(h)
}


fun1(   )
console.log(h)