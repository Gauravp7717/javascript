console.log("gaurav" + " patil");
/**
 * in the above code the lval and Rval is string so 
 * it Tostring() -> Topremitive ()
 * concate if there was a str present .
 * 
 */

console.log(undefined  + "node");

/**
 * undefined -> "undefined"
 * and concatinated with the rest  of the str 
 */

console.log("5" + null);
/**
 * one of them is already a str , then both will converted to str 
 * "5"+"null" ->"5null"
 */
console.log("guarav " + true);
/**
 * if one of them is str them rest will get converted !
 */


console.log("gaurav" + [null ,undefined]);

console.log("DG" + [NaN]);


console.log("DG" + [null]);
