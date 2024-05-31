
//if possitive then show right and if the val is negative then show the left 

function checkdirection(val){
    if(val>=0){
        return true;

    }
    else{
        return false;
    }
}

let val  = -10;
console.log(typeof(val))

let result  = checkdirection(val)

if(result){
    console.log("rigth")
}
else{
    console.log("left")
}


