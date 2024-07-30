// self try

function gossip(url){
    return new Promise(function(resolve,reject){
        console.log("starting of the gossip by gaurav")

        setTimeout(() => {
            console.log("then suddenly sir entred in the room ", url)
            let conclusion =  "gossip end"
            console.log(conclusion)
            resolve(conclusion);
        }, 5000);
    })

}

gossip("panchal")