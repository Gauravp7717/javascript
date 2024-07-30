/**
 * how can we write a function to download a data from url , and not use callback 
 * instead can we use promise ? 
 * 
 */

function fetch(url){
    return new Promise(function (resolve,reject){
        console.log("the starting of the downloading data from ",url);

        setTimeout(() => {
            let data = "dummy data"
            console.log("the download is complete from")
            // when the function is complete 
            resolve(data) //  when process is success then , then can return as the success but in the promise the success data is return in the resolved function 
            // resolve funtion shows the success of the data 
        }, 4000);
    })
}

fetch("dg")