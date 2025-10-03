"use strict";  // treat all JS code as newer version

// alert("Hello") // we r using nodeJs, not browser

console.log(typeof undefined);  // undefined
console.log(typeof null);  // an object


// Primitive 
// 7 types: String, Number, Boolean, null, undefined(int _?)

const score = 100
const scoreValue = 100.3

const isLogedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);



//Reference(Non-Primitive)

// Directly reference is passed not just copy given
// Array, Objects, Functions










//  Stack (Primitive), always gets the copy.... 
//  Heap (Non-Primitive), gets the original