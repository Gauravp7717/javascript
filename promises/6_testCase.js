
function fun(){
   return new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve ("timer is promise")
    }, 10000);
   })
}


console.log("start of the file");

setTimeout(() => {

    let x = fun();
    x.then(function (value){
        console.log("whos promise",value)
    })
    console.log("timer 1 done");
}, 0);


let x  = Promise.resolve("gaurav");
x.then(function (value){
    console.log("the king is " , value );
})

setTimeout(() => {
    console.log("timer 2 done")
}, 0);

console.log("end of the file")

