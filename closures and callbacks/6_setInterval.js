let a = setInterval(()=>{
    console.log("hii")
},1000);

setTimeout(() => {
    clearInterval(a)
}, 13000);