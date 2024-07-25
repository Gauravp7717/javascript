function todo(task){


    setTimeout(() => {
        console.log("one of the following ")
        console.log("hii ", task) // it'll remember the variable not the value 
        //  this is happens deu to lexical scoping 

        task = "daya"
    }, 5000);


    console.log("task completed")

    // here is the ending of the todo then how can the arrow function is able to access the argument task of todo.
}

console.log("start");

todo("dg");

console.log("end");