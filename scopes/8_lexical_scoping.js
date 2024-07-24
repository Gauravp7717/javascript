var player = "virat kohli"; // has a global scope so it can access globally
 
function fun(){
    var player = "gaurav patil"; // has a function scope so it can handel in function scope only 
    console.log(player);


}
console.log(player) // this is for the global scope 
fun();  // this is for the function scope so it'll handle the scope of that function only 
console.log(player)



var team = "rcb";

function ipl(){
    var team  = "mi";
    csk = "gandu team"; // this is not declared the formally so it'll ask to outer scope from its present 
                // if the scope is present for the variable in the outer scope then 
                // then if the scope is not present for this then it'll automatically get the global scope,using the AUTOGLOBALS
    console.log(team);
    console.log(csk);
}
  
ipl();
console.log(team);
console.log(csk);

 