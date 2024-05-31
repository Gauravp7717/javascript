console.log("start");

if(1>0){ // this condition is true therefore this will get print


    console.log("this is working in this code");
} 


// truthy val eg

if(12){
    console.log(" 12 is get printed")

}


// else eg 


if(12>122){
    console.log("this is true ")
}

else{
    console.log("this is false");
}

// by declaring in 1st 

let gp =  true;

if(gp){
    console.log("this is true");
}
else{
    console.log("this is false statement");
}


//else if demo in js 


let userisprime = true;
let userisvip = false;


if(userisprime){
    console.log("this is prime membership")
}
else if (userisvip){
    console.log("this is vip user")
}
else{
    console.log("not at all")
}


//  using logical content 

if(userisprime && userisvip){
    console.log("true")
}
else{
    console.log("false")
}

let user1 = true;
let user2 = false;
let user3 = false;

if(user1){
    if(user2){
        if(user3){
            console.log("3 star user")
        }
        else{
            console.log(" bhikari user ")
        }
    }
    else{
        console.log(
            "user with 2 star"
        )
    }
}
else{
    console.log(
        "user with just 1 star"
    )
}

// here the 1st true is printed rather than is dont check wheather the 2nd conditon if 1st one is get true