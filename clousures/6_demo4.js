function test(){
    for(let i = 0 ;i<3 ;i++){
        setTimeout(() => {
            console.log(`i: ${i}`); // "i :" + i
        }, i*1000);
    }
}

// deu to block scope nature of the let it wont available for the test function until the execution of the settimeout is done.

test();