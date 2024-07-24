var team = "rcb";

function ipl(){
    console.log(rohit);

    var team = "india";
    var rohit = "the hitman"; // in the phase one , we just have assigned the scope of the variable 
                            // that means the empty bucket is formed for phase one 
                            // then when we'll have the phase 2 for the execution then it'll just see the empty bucket 
                            // the empty var is always have the val undefined ;
                            // so it'll print the undefined for sure 
    task  = "fuck";
    console.log(team);
    console.log(task);
}

ipl();
console.log(team);
console.log(task);