// creation of the object 

let x = {name:"gaurav",
age : 20};

let y= {name : "yash",
age :20};

// access of the object 

console.log(y.name);
console.log(x["name"]);


// are objects is mutable ?

y.name = "pradyumna";
console.log(y);


// add property tO already created property

x.marks = 100; // if this property is exist then it will update otherwise it'll add that property 
console.log(x)

x["comapany"] = "ceo";
console.log(x);


// how to delete the property from the object 
// you have to use delete operator along with the key value pair


delete y.name;
console.log(y);
