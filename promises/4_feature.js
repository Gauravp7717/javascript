/**
 * tasks
 * 
 * 1 -> write a function to download a data from a url 
 * 2 -> write a func to save the data in the file and return the file name
 * 3 -> write a func to upload the data from file previous url to new url 
 */


function fetchData(url){ // here is the function with arguement url
    return new Promise(function(resolve,reject){  // we have created a promise function which always expects func as arguement with two 
         //parameters resolved and reject
        // where as resolved shows the succcess state
        // and reject shows the error state  
        console.log("the downlaoding is start from ",url) 
        setTimeout(() => {  // created a timeout func which a async task in js => handled by run time  of js
            let data = "dummy data";
            console.log("download completed")
            resolve(data) // the promise is get resolve after the timer of 4 sec 
            //  till then the func is got complete but the promise state is pending 
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



// let data = fetchData("www.dg.com"); // this function returns the promise

// let filename = saveData(data);

// let responce = uploadData(filename ,"www.gd.com");

/**
 * this is method is not gonna work in async js therefore we have the .then() to execute our this type of code
 */






// let downlaodingdata = fetchData("www.dg.com")
// downlaodingdata.then(function (value){
//     console.log("the download promis is fulfilled")
//     // console.log(value)
//     let writedata = saveData(value);
//     writedata.then(function (value){
//         console.log("writing of file completed")
//         console.log(value)
//         let uploaddatafunc = uploadData(value ,"wwww.gd.com");
//         uploaddatafunc.then(function (value){
//             console.log("upload promise is fulfilled")
//             console.log(value)
//         })
//     })

// })

// the above peice of code resolvs the inversion of control problem but still face the promise hell problem



let downlaodingdata = fetchData("www.dg.com")
downlaodingdata.then(function (value){
    console.log("download fulfilled")
    console.log(value);
    return value;
})
.then(function (value){
  return saveData(value)
//    return value;
})
.then(function (value){
    console.log(value)
     return uploadData(value, "www.gd.com")
    // return value
})


// this is code which is not give us the promise hell and it lookd good 