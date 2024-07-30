function process(){
    console.log("start");

    setTimeout(() => {
        console.log("the task is complete"); // even the runtime has complete the timer but it doesnt get executed until call stack is empty
    }, 3000);

    for(let i=0;i<10000000000;i++){ 
        // some task
    }

    console.log("the end");

}

process();

console.log("global");