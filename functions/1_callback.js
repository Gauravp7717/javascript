function fun(x , fn){
    for(let i = 0;i<x;i++){
        fn();
    }
}

fun(10, function(){
    console.log("hellow !")
});