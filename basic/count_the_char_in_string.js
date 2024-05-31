// we have to count the number of the charecters in the give string 

let str = "gaurav";
let frquencyCount = {};

for (const char of str) {
    if (frquencyCount[char]) {
        frquencyCount[char] += 1;
    } else {
        frquencyCount[char] = 1;
    }
}

console.log(frquencyCount);






