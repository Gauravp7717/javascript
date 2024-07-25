function fun(){
    let college  = "pgm";

    function callb(params){
        console.log(college);
        console.log(stud);

    }

    return callb;


}

let x = fun();
x();
var stud = "gp"; // got the global scope but cant handel before innitialization so got undefined !
x();