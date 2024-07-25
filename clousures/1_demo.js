function todo(task){


    setTimeout(() => {
        console.log("one of the following ")
        console.log("hii ", task)
    }, 5000);


    console.log("task completed")

    // here is the ending of the todo then how can the arrow function is able to access the argument task of todo.
}

console.log("start");

todo("task");

console.log("end");