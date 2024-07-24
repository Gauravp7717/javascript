{
    let x = 10; //it'll not make it a global varible  
    /**
     * let will always give you the block scope , it'll also give the diffrent o/p than var on the {} block of code
     */
    console.log(x);
}

// console.log(x);

function  fun(){
    console.log(y) // it'll not get undefined as the var have gave us but it'll show the error !  
    let v  = 10;
    console.log(v);
}

fun();



// console.log(v);
