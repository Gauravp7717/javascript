var player = "vk";

function fun()
{
    var player = "gk";
    console.log(player,team); // here we'll get the error because we are'nt declaring it as a formal so it'll show error
    team = "rcb;" // this is not the formal declaration 
    // and we are getting the auto global scope here for this un formal declaration in the 2nd exucution phase
}

console.log(player);
fun();

function gun(){
    console.log(gandu);
    var gandu = "csk"; // here in the phase one we'll formally declaring the variable which show undefined val;
    var six = "raydu";
    console.log(six);
}

gun();