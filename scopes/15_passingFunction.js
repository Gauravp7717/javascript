function fun(){
    console.log("the funny moments");
}

function gun(fn){
    console.log("the life is get fucked !");
    fn();
    console.log("when you've a relationship");
    // console.trace();
}

gun(function (){
    console.trace();
    console.log("new function passed !"); // this functon expression is not have any name then its the anonymous
})

gun(fun); // named function expression  


