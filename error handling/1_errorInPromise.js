function fetchData(url){
    return new Promise(function(resolve,reject){ 
    console.log("the downlaoding is start from ",url) 
        setTimeout(() => { 
        let data = "dummy data";
        console.log("download completed")
        resolve(data)
        // reject(data)
    }, 4000);
})
}


let x  = fetchData("www.gandu.com");

x.then(function get(value){
    console.log("the value is", value)
},function error(err){
 console.log("the error is ", err)
})