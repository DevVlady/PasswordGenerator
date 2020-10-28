// Assignment Code - Original
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button - Original
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input - Original
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

//My code below....................................................................................

//My variables
var numberCharacters;
var specialCharacters;
var upperCharacters;
var lowerCharacters;
var options;
var password = [];


//My arrays
var begin = "";
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "?", "+", "`"];


// Function that generates feedback based on what the user selects.

function writePassword() {
  //Will prompt a filed to enter a number of characters user would like
  begin = parseInt(prompt("How many characters would you like? Please enter a number between 8 & 128"));


  while  (begin < 8 || begin > 128) {
    //Checks users input to ensure it meets criteria...will prompt message if criteria is not met
    alert("Please enter a vlaid length & try again!");
    begin = parseInt(prompt("Please enter a number between 8 & 128"));
  }

  if (!begin) {
    //WIll prompt the message below if user decides to escape the input field
    alert("Please enter a value to conitnue!")
  }
  else {
    //Will prompt the field criteria if user enters values with the parameters
    numberCharacters = confirm("Would you like numbers included in your password?");
    specialCharacters = confirm("Would you like special characters included in your password?");
    upperCharacters = confirm("Would you like uppercase letters included in your password?");
    lowerCharacters = confirm("Would you like lowercase letters included in your password?");
  }
  while (!numberCharacters && !specialCharacters && !upperCharacters && !lowerCharacters) {
    //If no options are seelcted then it will prompt the message below
    options = alert("Error! Please select at least one of the of following options.");
    numberCharacters = confirm("Would you like numbers included in your password?");
    specialCharacters = confirm("Would you like special characters included in your password?");
    upperCharacters = confirm("Would you like uppercase letters included in your password?");
    lowerCharacters = confirm("Would you like lowercase letters included in your password?");
  }


  //Code Works up until the lines below**************


  //Creating the for variable whcih will help when generating random password
  // for (var i = 0; i < begin; i++) {

  // }












}












































// // Generate a random number
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// // Generate random lowercase letter
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// // Generate random uppercase letter
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// // Generate random special character
// function getRandomSymbols() {
//   var symbols = '~`!#$%^&*+=-[]\';,/{}|\":<>?';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

