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
  '@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':',
  ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems);
});

let lengthHTML = document.getElementById("length");
let lowercaseHTML = document.getElementById("lowercase");
let uppercaseHTML = document.getElementById("uppercase");
let numbersHTML = document.getElementById("numbers");
let specialCharsHTML = document.getElementById("specialChars");

let getPasswordCriteria = () => {
  console.log(lengthHTML.value);

  if (lengthHTML.value < 8) {
    alert("Password has to be at least 8 characters long.");
  } else if (lengthHTML.value > 128) {
    alert("Password must be less than 128 characters long.");
  };

  if (lowercaseHTML.checked === false && uppercaseHTML.checked === false && numbersHTML.checked === false && specialCharsHTML.checked === false ) {
    alert("You must choose at least one character type.");
  };

  let passwordObj = {
    length : lengthHTML.value,
    lowercase : lowercaseHTML.checked,
    uppercase : uppercaseHTML.checked,
    numbers : numbersHTML.checked,
    specialChars : specialCharsHTML.checked
  };

  console.log(passwordObj);
};

let generatePass = () => {
  console.log("hello");
};