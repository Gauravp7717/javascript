

console.log(12-4); // both of that are already a number so its  happend directly 

console.log(undefined -2 )
 // undefined is not a valid number so makeit to undergose Tonumber abstract operation 
// Tonumber(undefined ) -> NaN 
// NaN -2 -> anthing with the NaN will be the NaN

console.log(null - 5 ) ;

/*
null is not a valid number , so make it undergose to Tonumber abstract operation 
Tonumber(null ) -> +0;
+0 -5 -> -5

*/ 


console.log("132" - 10);
/**
 * 132 is string , so we make it undergo to  Tonumber abstract operation 
 * Tonumber(string)    -> number 
 * 
 * "132" -> 132
 * 
  */


console.log("sdkjn1234" - 10);
/**
 * so this case this will get the NaN , after the Tonumber abstract operation 


*/

console.log(4-  true);

/**
 * this condiiton the val true get , undergose to the Tonumber abstract operation 
 * it will be true -> 1
 * so (4 -1 ) -> 3
 */


console.log("0xf" - 1);
/**
 * in this case there is a hexa decimal number and js can pass it so it will converted to the number and 
 * done the oprtion on it
 */

console.log("0o11"-1);
/**
 * this can become a valid octal so js will convert it as a octal and done the oprtn
 * this needs a (0o) as a prefix in the front of octal code 
 */

 