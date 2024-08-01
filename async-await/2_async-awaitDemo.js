function fetchData(url){
    return new Promise(function(resolve,reject){ 
     
    console.log("the downlaoding is start from ",url) 
    setTimeout(() => { 
        let data = "dummy data";
        console.log("download completed")
        resolve(data)  
       
    }, 4000);
})
}


async function fun(){
    console.log("entering the process")
    let val1 = await fetchData("www.google.com")
    console.log("google downloading done")
    let val2 = await fetchData("www.youtube.com")
    console.log("the youtube download completed")
    return val1 + val2;


}

console.log("start")
setTimeout(() => {
        console.log("timer 1")
}, 0);

let x = fun();

x.then(function (value){
    console.log("finallu process promise resolved with ", value)
})

setTimeout(() => {
    console.log("timer 2")
}, 1000);
setTimeout(() => {
    console.log("timer 3")
}, 0);

console.log("end")
