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


// this is same logic for the every func given below 

function saveData(data){
return new Promise(function(resolve,reject){
    console.log("the downloaded data is", data)

    setTimeout(() => {
        let filename = "output.txt"
        console.log("the data is saved in the file")
        resolve( filename) 
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



let downloadData = fetchData("www.google.com");
let save = saveData("dummy data");
let upload = uploadData("file.txt","www.kzip.com");

Promise.all([downloadData, save ,upload]).then(function (value){
    console.log(value)
})