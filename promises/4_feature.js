/**
 * tasks
 * 
 * 1 -> write a function to download a data from a url 
 * 2 -> write a func to save the data in the file and return the file name
 * 3 -> write a func to upload the data from file previous url to new url 
 */


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


function saveData(data){
    return new Promise(function(resolve,reject){
        console.log("the downloaded data is", data)

        setTimeout(() => {
            let filename = "output.txt"
            console.log("the data is saved in the file")
            resolve(filename) 
        }, 1000);
    })
}

function uploadData(filename ,newurl){
    return new Promise(function(resolve,reject){
        console.log("the file is going to upload on" ,newurl)
        
        setTimeout(() => {
            let uploadfile = "successfully uploaded";
            console.log("the file is uploaded successfully")
            resolve(uploadfile)
        }, 2000);
    })
}



let data = fetchData("www.dg.com"); // this function returns the promise

let filename = saveData(data);

let responce = uploadData(filename ,"www.gd.com");