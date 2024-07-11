// File to explain hoisting in JavaScript

sayHello();

// Function declaration
function sayHello() {
  console.log('Hello regular function');
}

sayHello();

sayHello = function () {
  console.log('Hello regular function 2');
};

sayHello();

// Arrow function
let sayHi = function () {
  console.log('Hi arrow function');
};

sayHi();

sayHi = () => {
  console.log('Hi arrow function 2');
}

sayHi();

// Variable declaration
console.log(a);

var a = 10;
let b;
b = 20;
const c = 30;

console.log(a, b, c);