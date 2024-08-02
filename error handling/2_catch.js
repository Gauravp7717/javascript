function fetchData(url){
    return new Promise(function(resolve,reject){ 
    console.log("the downlaoding is start from ",url) 
        setTimeout(() => { 
        let data = "dummy daa";
        console.log("download completed")
        if(data != "dummy data")
        reject(data)
        else
        resolve(data)
    }, 4000);
})
}


let x  = fetchData("www.gandu.com");

x.then(function get(value){
    console.log("the value is", value)
    return "settttt wetttt"
})
.then(function set1(value){
    console.log("the set1 value is " ,value)
})
.catch(function failed(err){
    console.log("the error is ",err);
})