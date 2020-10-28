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
number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "?", "+", "`"];


// Function that generates feedback based on what the user selects.

function writePassword() {

  begin = parseInt(prompt("How many characters would you like? Please enter a number between 8 & 129"));
  // If statement below will prompt alert mesaage if no value is entered.
  if (!begin) {
    alert("A value is needed in order to continue!");
  }

  else if (begin < 8 || begin > 129) {
    //Checks users input to ensure it meets criteria
    alert("Please enter a vlaid length & try again!");
    begin = parseInt(prompt("Please enter a number between 8 & 129"));
    numberCharacters = confirm("Would you like numbers included in your password?");
    specialCharacters = confirm("Would you like special characters included in your password?");
    upperCharacters = confirm("Would you like uppercase letters included in your password?");
    lowerCharacters = confirm("Would you like lowercase letters included in your password?");
  }

  else {
    //If user enters numbers within the criteria then the alerts below will appear one after the other.
    numberCharacters = confirm("Would you like numbers included in your password?");
    specialCharacters = confirm("Would you like special characters included in your password?");
    upperCharacters = confirm("Would you like uppercase letters included in your password?");
    lowerCharacters = confirm("Would you like lowercase letters included in your password?");
  };

  if (!numberCharacters && !specialCharacters && !upperCharacters && !lowerCharacters) {
    options = alert("Error! Please select at least one of the of following options.");
    numberCharacters = confirm("Would you like numbers included in your password?");
    specialCharacters = confirm("Would you like special characters included in your password?");
    upperCharacters = confirm("Would you like uppercase letters included in your password?");
    lowerCharacters = confirm("Would you like lowercase letters included in your password?");
  }

  //Creating the for variable whcih will help when generating random password
  // for (var i = 0)












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

