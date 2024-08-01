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


async function processs(){
    let download  = await fetchData("www.google.com");
    console.log("the download wait is over")
    let file  = await saveData(download);
    console.log(file);
    let upload = await uploadData(file ,"www.dishu.com")
    console.log("the uploaded responce is", upload)
    return true;
}


console.log("start") // it wait to complete fetch data only 
processs();
 // rather than that the js is still not waiting for anything
console.log("end")
