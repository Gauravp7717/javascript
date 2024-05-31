// Q . check the given x is even or odd using if else 

let x = 40;

if(x%2==0){
    console.log("the number is even ")
}
else{
    console.log("the number is odd")
}


//Q check the given , which is the biggrst number in given 3 nums

let g= 6;
let k = 9;
let p = 10;

if(g >k && g > p){
    console.log("the g is greater")
}
else if(k >g && k> p){
    console.log("the k is greater")
}
else{
    console.log("the p is greater")
}

    
// check the given sides of triangle can actually form a triangle 

let a = 4;
let b  = 8;
let c  = 6;

if(b + c > a && c + a > b && a + b > c){
    console.log("it can from the triangle")

}
else{
    console.log("no ! it cannot form the triangle")
}

