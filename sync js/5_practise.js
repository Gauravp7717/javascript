function fun(url , fn){

    console.log("the starting of the function");

    setTimeout(() => {
        console.log("the ulr is" , url)
        
        let data  = "the download gets complete by chrome";
        fn(data);

    }, 5000);
}

fun("www", function dos(data){
    console.log(data)
})