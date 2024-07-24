function fun(x ,fn){
    /**
     * x -> number 
     * fn  -> call back function
     */


    // some logic
    for(let i=0; i<x;i++){
        console.log(i);


    }


    // calling the callback function passed 
    fn();

    // some more logic 

}


fun(10, function log(){

    //this is the call back function 
    console.log("hii bro");
})
