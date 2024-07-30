function fetchcustom(url){  // we are mimicing the funtion 
    //  download content of the url 
    // this downloading will take some time
    // we will download the content from the url and pass the result to callback

    console.log("starting downloading from url" , url);
    setTimeout(() => {
        console.log("download complete !");
        let response  =  "dummy data";
        return response;
    }, 3000);
}


const response  = fetchcustom("www.google.com");
console.log(response);
console.log("end of the file ")