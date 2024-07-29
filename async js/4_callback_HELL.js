function fun(url,fn){
    console.log("start downloading")

    setTimeout(() => {
        console.log("the download is complete");
        let response = "dummy data";
        fn(response);
        // console.log("the end of function");
    
    }, 3000);


}

// Q . 2 answer

function writefile(data , fn){
    console.log("writing started");

    setTimeout(() => {
        console.log("writing is completed")
        let filename  = "output.txt"
        fn(filename)
    }, 4000);


}


//  Q.3 to upload the data 

function  uploadData(filename , newurl , fn){
    console.log("the uploading is started")

    setTimeout(() => {
        console.log("the file", filename , "is uploaded on" ,newurl);
        let uploadresponse = "uploaded succussfully"
        fn(uploadresponse);
    }, 2000);
}




let x = fun("www.google.com", function callback(response){
    console.log("the outpu is ", response);
    writefile(response , function writefilecallback(filename){
        console.log("the file is saved ",filename);

        uploadData(filename , "www.drive.google.com",function uploadDatacallback(uploadresponse){
            console.log(
                "the file is  " ,uploadresponse
            )
        })
    })
})

/**
 * this is called the callback hell 
 */