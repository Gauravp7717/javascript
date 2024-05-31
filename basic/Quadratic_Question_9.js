// solve the Qudratic eQuation using the js function 


function solve(a ,b ,c){
     // ax^2 + bx + c = 0

     let sqrtof = Math.sqrt(b*b-4*a*c);
      

     let root1 = (-b + sqrtof)/(2*a);
     let root2 = (-b - sqrtof)/(2*a);

     console.log("the root are:", root1 ,root2);
}


solve(2,5,3);