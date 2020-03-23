const lowercaseArr = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const uppercaseArr = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialCharArr = [
  '@', '%', '+', '!', '#', '$', '?', '-', '_'
];

// initializes modal from materialize
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems);
});

// using variables to hold the id's of the checkboxes & input
let lengthHTML = document.getElementById("length");
let lowercaseHTML = document.getElementById("lowercase");
let uppercaseHTML = document.getElementById("uppercase");
let numbersHTML = document.getElementById("numbers");
let specialCharsHTML = document.getElementById("specialChars");

// helper function used to get a random index in an array
let getRand = (arr) => {

  let randIndex = Math.floor(Math.random() * arr.length);
  let randChar = arr[randIndex];
  return randChar;

};

// helper function that shuffles an array
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// returns data from modal
let getPasswordCriteria = () => {

  // base case - sets range of characters allowed for the password
  if (lengthHTML.value < 8) {
    alert("Password has to be at least 8 characters long.");
  } else if (lengthHTML.value >= 128) {
    alert("Password must be less than 128 characters long.");
  };

  if (lowercaseHTML.checked === false && uppercaseHTML.checked === false && numbersHTML.checked === false && specialCharsHTML.checked === false ) {
    alert("You must choose at least one character type.");
  };

  // stores users password criteria
  let passwordObj = {
    length : lengthHTML.value,
    lowercase : lowercaseHTML.checked,
    uppercase : uppercaseHTML.checked,
    numbers : numbersHTML.checked,
    specialChars : specialCharsHTML.checked
  };

  return passwordObj;

};

// takes in the passwords criteria and generates a password
let generatePass = () => {

  let availableChars = [];
  let mustHaveChars = [];
  let result = [];

  let criteria = getPasswordCriteria();

  if (criteria.lowercase) {
    for (let i = 0; i < 2; i++) {
      mustHaveChars.push(getRand(lowercaseArr));
    };
    availableChars = availableChars.concat(lowercaseArr);
  };

  if (criteria.uppercase) {
    for (let i = 0; i < 2; i++) {
      mustHaveChars.push(getRand(uppercaseArr));
    };
    availableChars = availableChars.concat(uppercaseArr);
  };

  if (criteria.numbers) {
    for (let i = 0; i < 2; i++) {
      mustHaveChars.push(getRand(numbersArr));
    };
    availableChars = availableChars.concat(numbersArr);
  };

  if (criteria.specialChars) {
    for (let i = 0; i < 2; i++) {
      mustHaveChars.push(getRand(specialCharArr));
    };
    availableChars = availableChars.concat(specialCharArr);
  };

  result = result.concat(mustHaveChars);

  // determines the amount of characters left to meet users request
  let difference = criteria.length - result.length;

  for (let i = 0; i < difference; i++) {
    // variable created to hold the random characters from the array
    let addedChars = getRand(availableChars);
    // adds variables to the final results array
    result.push(addedChars);
  }

  shuffle(result);
  return result.join('');

};