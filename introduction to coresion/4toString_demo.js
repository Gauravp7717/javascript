console.log("gaurav" + {"a": 10});


/**
 * guarav is already a string so i wont be convrted i.e primitive
 * here the object in a primitive to toString() -> by default it'll give '[object object]' 
 * it'll be "gaurav" + "[object object]" -> gaurav[objec object]
 * 
 * 
 */


// what will it give with the (-) operator

console.log(10 - {"a":10});

/**
 * 10 is already a primitive 
 * object is gose undergose to valueOf() -> return the same obj
 * that return a obj again so it'll go undergose to the toString() -> "[object object]"
 * 
 * 
 * so again in the '-' operator the o/p is undergose toNumber() -> NaN 
 * 
 * so basically the 10-NaN -> NaN
 */

