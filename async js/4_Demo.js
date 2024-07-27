function fun(url,fn)
{
    console.log("start downloading")

    setTimeout(() => {
        console.log("the download is complete");
        let response = "dummy data";
        fn(response);
        console.log("the end of function");
    
    }, 3000);


}
let x = fun("www.google.com", function callback(response){
    console.log("the outpu is ", response);
})