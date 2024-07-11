// PRIMITIVE VALUES
// 1. Number
let a = 10;
// 10 = 11; This is not possible since primitive values are immutable
// 2. String
let b = 'Hello';
// 'something' = 'something else'; // This is not possible since primitive values are immutable
// 3. Boolean
let c = true;
// 4. Undefined
let d = undefined;
// 5. Null
let e = null;
// 6. Symbol
let f = Symbol('foo');
// 7. BigInt
let g = 1234567890123456789012345678901234567890n;

// Variables are not values, variables are wires

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);
// console.log(e, typeof e);
// console.log(f, typeof f);

// OBJECTS & FUNCTIONS
let person = {
  name: 'John',
  age: 30,
  greeting: function properNameOfThisFunction () {
    console.log('Hello, im ' + this.name + ' and I am ' + this.age + ' years old');
  },
  whoAmI: function () { console.log('Im ---- ', this); }
};

let person2 = Object.create(person);
person2.name = 'Alberto';
person2.age = 24;

// console.log('Person 1:', person, typeof person);
// console.log(person['name'], typeof person.name);
// console.log(person.age, typeof person.age);

// console.log('-------------------');

// console.log('Person 2:', person2, typeof person2);
// console.log(person2['name'], typeof person2.name);
// console.log(person2.age, typeof person2.age);

// person2.greeting();
// person.greeting();

function helloWorldRegularFunction(nameToGreet) {
  return 'Hello ' + nameToGreet;
}

(function () {
  console.log('anonymous function execution');
})();

(() => { console.log('anonymous arrow function execution') })();

const helloWorldArrowFunction = (nameToGreet) => {
  return 'Hello ' + nameToGreet;
}

let returnedMessage1 = helloWorldRegularFunction('John');
let returnedMessage2 = helloWorldArrowFunction('Alberto');

// console.log(returnedMessage1, typeof helloWorldRegularFunction);
// console.log(returnedMessage2, typeof helloWorldArrowFunction);

// PROTOTYPES
let vehicle = {
  material: 'metal',
  color: 'red',
}

let motorVehicle = {
  __proto__: vehicle,
  motorType: 'combustion',
  gas: 'regular',
};

let motorcycle = {
  __proto__: motorVehicle,
  color: 'black',
  brand: 'Harley Davidson',
  numberOfPassengers: 2,
  numberOfWheels: 2,
  plateNumber: '1234'
};

motorcycle.material = 'plastic';
motorcycle.serialNumber = '1234567890';

// console.log(vehicle);
// console.log(motorVehicle);
// console.log(motorcycle);

let originalObject = {
  a: 1,
  b: 2,
  c: 3
};

// console.log('OBJ Keys', Object.keys(originalObject));
// console.log('OBJ Values', Object.values(originalObject));

// CLASSES

// EXPRESSIONS AND STATEMENTS
let x = 10; // This is a statement
let y = x + 10; // This is an expression

// variable declaration
let z;
// assignment
z = 20;

// CONTROL FLOW
let conditionVariable = Math.floor(Math.random() * 29) + 1;

if (conditionVariable < 10) {
  if (conditionVariable < 5) {
    if (conditionVariable < 3) {
      // console.log('Condition is less than 3 but greater than 0');
    } else {
      // console.log('Condition is greater than 3 but less than 5');
    }
  } else {
    if (conditionVariable < 8) {
      // console.log('Condition is less than 8 but greater than 5');
    } else {
      // console.log('Condition is greater than 8 but less than 10');
    }
  }
} else if (conditionVariable < 20) {
  if (conditionVariable < 15) {
    if (conditionVariable < 12) {
      // console.log('Condition is less than 12 but greater than 10');
    } else {
      // console.log('Condition is greater than 12 but less than 15');
    }
  } else {
    if (conditionVariable < 18) {
      // console.log('Condition is less than 18 but greater than 15');
    } else {
      // console.log('Condition is greater than 18 but less than 20');
    }
  }
} else {
  if (conditionVariable < 25) {
    if (conditionVariable < 23) {
      // console.log('Condition is less than 23 but greater than 20');
    } else {
      // console.log('Condition is greater than 23 but less than 25');
    }
  } else {
    if (conditionVariable < 28) {
      // console.log('Condition is less than 28 but greater than 25');
    } else {
      // console.log('Condition is greater than 28 but less than 30');
    }
  }
}

switch (conditionVariable) {
  case 1:
    // console.log('Condition is 1');
    break;
  case 2:
    // console.log('Condition is 2');
    break;
  case 3:
    // console.log('Condition is 3');
    break;
  case 4:
    // console.log('Condition is 4');
    break;
  case 5:
    // console.log('Condition is 5');
    break;
  default:
    // console.log('Condition is not 1, 2, 3, 4 or 5 but is:', conditionVariable);
    break;
}

// Ternary operator
// conditionVariable >= 10 ? console.log('Condition is greater than 10') : console.log('Condition is less than 10');

// LOOPS
let i = 0;
let arr = [];
while (i < 10) {
  arr.push(i+1);
  i++;
}
// console.log('First array', arr);

let l = 10;
let arr3 = [];
do {
  arr3.push(l+1);
  l++;
} while (l < 10);
// console.log('Third array', arr3);

let arr2 = [];
for (let j = 0; j < 10; j++) {
  arr2.push(j+1);
}
// console.log(arr2);

// ARRAYS
arr.forEach((element, index) => {
  // console.log('Element:', element, 'Index:', index);
});

// EQUALITY OPERATORS
// standard equality
let aa = 1;
console.log(aa == '1');

// strict equality
console.log(aa === '1');

// same value equality
let hacker = { name: 'John' };
let hacker2 = { name: 'John' };
hacker2.name = 'Alberto';
console.log(hacker, hacker2);
console.log(Object.is(hacker, hacker2));