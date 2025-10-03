const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);  // Conv to string

console.log(balance.toFixed(2));    // fixes *

const otherNumber = 123.8977
console.log(otherNumber.toPrecision(4));    // Precision **

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));  // Indian value

console.log(Math.round(4.3));   // Round-off *

console.log(Math.min(2,6, 1, 7));

console.log((Math.random()*10) + 1);    // random no **


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));  // very imp**
