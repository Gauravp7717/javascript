//  Question which solved using the promise resolve and reject

function solve(val){
        return new Promise(function(resolve,reject){
            console.log("start")

            // function which consume some amount of the time 

            setTimeout(() => {
                console.log("the timer is complete")
                if(val%2==0){
                    resolve("even")
                }
                else{
                    reject("odd")
                }
            }, 5000);

            console.log("somewhere")
        });
}


solve(2)