const {odd, even} = require("./var");
const checkOddEven = require("./func");

console.log("function + " + this===exports);
function checkStringOddEven(str){
    console.log("function + " + this===global);
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkOddEven(10));
console.log(checkStringOddEven("hello"));

