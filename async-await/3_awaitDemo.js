async function fun(){
    console.log("enter");
    let x = await 20;
    console.log("exist")
    return x;
}

console.log("start")
let c = fun();
c.then(function(value){
    console.log("value is ",value)
})
console.log(c)

