
var name  = "sanket"//acting here as a global veriable 


function greets(){ // the fuction is also a global variable 
    console.log("congratulations" , name)

    function test(){
        console.log("test")// such that this function is not accessible globallys
    }

}

function fun(){
    console.log("have a fun ", name)

}


greets();
fun();
