const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "value");
// console.log(`Hello my name is ${name}`);


const gameName = new String('hitesh-tic')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(typeof(gameName));
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // can give -ve value
console.log(anotherString);

const newStringOne = "    hitesh   "
console.log(newStringOne.trim());

const url = "https://hitesh@omnia.com"
console.log(url.replace('hitesh', 'kg'));   //  replaces*

console.log(url.includes('hitesh')); //  check includes*

console.log(gameName.split('-'));




