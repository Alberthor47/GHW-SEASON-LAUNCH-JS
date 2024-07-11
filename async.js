console.log('Start');

// Callbacks

// setTimeout(() => {
//   console.log('First callback function called');
//   setTimeout(() => {
//     console.log('Second callback function called');
//     setTimeout(() => {
//       console.log('Third callback function called');
//       setTimeout(() => {
//         console.log('End');
//       }, 2000);
//     }, 3000);
//   }, 5000);
// }, 3000);

// setTimeout(ourCallbackFunction, 3000);

// function ourCallbackFunction() {
//   console.log('Callback function called');
//   setTimeout(anotherCallbackFunction, 5000);
// }

// function anotherCallbackFunction() {
//   console.log('Another callback function called');
//   setTimeout(lastCallbackFunction, 2000);
// }

// function lastCallbackFunction() {
//   console.log('End');
// }

// Promises

function callToBooksDB(password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password !== 'Alberto123') {
        reject('Invalid password');
      } else {
        resolve('Books were fetched');
      }
    }, 1);
  });
}

// callToBooksDB('alberto123')
//   .then((books) => { console.log(books); return 'A message from the first then'; })
//   .then((message) => console.log(message))
//   .then(() => console.log('Another then'))
//   .then(() => console.log('End'))
//   .catch((error) => { console.log(error); return 'A message from the error' } )
//   .then((message) => console.log(message));

// Async/Await

async function fetchBooks() {
  try {
    let books = await callToBooksDB('alberto123');
    console.log(books);
  } catch (error) {
    console.log(error);
  }
  console.log('End');
}

fetchBooks();
