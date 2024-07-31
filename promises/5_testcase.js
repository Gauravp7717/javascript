console.log("start of the file");

setTimeout(() => {
    console.log("timer 1 done");
}, 0);


for(let i=0;i<1000000000;i++){
    // some code 
}

let x  = Promise.resolve("gaurav");
x.then(function (value){
    console.log("the king is " , value );
})

setTimeout(() => {
    console.log("timer 2 done")
}, 0);

console.log("end of the file")