let id1 =  setTimeout(() => {
    console.log("function is working")
    clearTimeout(id2);
}, 2000);

/**
 * this will get exucuted after the  2 seconds and called the clear time out 
 * which reqiures the unique id of the perticular timeout function which 
 * and halt the proccess of the that setTimeout funtion after executing the 1st task in reach .
 */



let id2 =  setTimeout(() => {
    console.log("this will get halt");
}, 5000);