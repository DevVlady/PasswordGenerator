// Assignment Code - Original
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button - Original
generateBtn.addEventListener("click", writePassword); //Ask about what type of function should go into the parenthesis

// Write password to the #password input - Original
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// }

//My code below....................................................................................

//My NEW & OFFICIAL code

//My variables ....Confirmed
var confirmNumbers;
var confirmUppercase;
var confirmLowercase;
var confirmSpecial;

//My variables created for the random functions in the if statements
var numbersRandom;
var uppercaseRandom;
var lowercaseRandom;
var specialRandom;


//My arrays & empty arrys that will store my responses
var choices = "";
var userChoice;
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "?", "+", "`"];


//The function used to generate the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //Should this value be value = passwordText.value instead????

  //Creating the equation that will prompt the user to input a value
  var userChoice = parseInt(prompt("Please choose the number of characters between 8 & 128 in order to begin!"));


  //If statements that will generate based on the selection of the user
  if (confirmNumbers) {
    var numbersRandom = numberCharacters(Math.floor(Math.random() * numberCharacters.length));
  }
  if (confirmUppercase) {
    var uppercaseRandom = uppercaseCharacters(Math.floor(Math.random() * uppercaseCharacters.length));
  }
  if (confirmLowercase) {
    var lowercaseRandom = lowercaseCharacters(Math.floor(Math.random() * lowercaseCharacters.length));
  }
  if (confirmSpecial) {
    var specialRandom = specialCharacters(Math.floor(Math.random() * specialCharacters.length));
  }
  //For loop in order for this function to wrap around based on the user response
  for (var i = 0; i < userChoice; i++) {

  }
  //Adding the return after the loop in order to return our value
  return choices;



}












//My Old Code Below -----------------------------------------------------------starting from scratch

// //My variables
// var numberCharacters;
// var specialCharacters;
// var upperCharacters;
// var lowerCharacters;
// var options;
// var password = [];


// //My arrays
// var begin = "";
// var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "?", "+", "`"];


// // Function that generates feedback based on what the user selects.

// function writePassword(passwordText) {
//   //Copied the function section that is given above
//   // var password = generatePassword();
//   // var passwordText = document.querySelector("#password");


//   passwordText.value = password;

//   //Will prompt a filed to enter a number of characters user would like
//   begin = parseInt(prompt("How many characters would you like? Please enter a number between 8 & 128"));

//   if (!begin) {
//     //WIll prompt the message below if user decides to escape the input field
//     alert("A value is needed in order to conitnue!")
//   }

//   else if  (begin < 8 || begin > 128) {
//     //Checks users input to ensure it meets criteria...will prompt message if criteria is not met
//     alert("Please enter a vlaid length & try again!");
//     begin = parseInt(prompt("Please enter a number between 8 & 128"));
//   }
//   else {
//     //Will prompt the field criteria if user enters values with the parameters
//     numberCharacters = confirm("Would you like numbers included in your password?");
//     specialCharacters = confirm("Would you like special characters included in your password?");
//     upperCharacters = confirm("Would you like uppercase letters included in your password?");
//     lowerCharacters = confirm("Would you like lowercase letters included in your password?");
//   }
//   if (!numberCharacters && !specialCharacters && !upperCharacters && !lowerCharacters) {
//     //If no options are seelcted then it will prompt the message below
//     options = alert("Error! Please select at least one of the of following options.");
//     numberCharacters = confirm("Would you like numbers included in your password?");
//     specialCharacters = confirm("Would you like special characters included in your password?");
//     upperCharacters = confirm("Would you like uppercase letters included in your password?");
//     lowerCharacters = confirm("Would you like lowercase letters included in your password?");
//   }
//   else if (numberCharacters && specialCharacters && upperCharacters && lowerCharacters) {
//     //This function will prompt if the user selects all four of the options provided
//     options = number.concat(special, upper, lower);
//   }
//   else if (numberCharacters && specialCharacters && upperCharacters) {
//     //This prompt will populate if only 3 of the 4 options are selected
//     options = number.concat(special, upper);
//   }
//   else if (numberCharacters && specialCharacters && lowerCharacters) {
//     //Another prompt if the user selects less then 4 options
//     options = number.concat(special, lower);
//   }
//   else if (numberCharacters && lowerCharacters && upperCharacters) {
//     //If 3 options are selected it will prompt this as one of the options
//     options = number.concat(lower, upper);
//   }
//   else if (specialCharacters && lowerCharacters && upperCharacters) {
//     //Another prompt for if 3 of the 4 options are selected
//     options = special.concat(lower, upper);
//   }
//   //All my prompts if the user selects only 2 options
//   else if (specialCharacters && numberCharacters) {
//     options = special.concat(number);
//   }
//   else if (specialCharacters && lowerCharacters) {
//     options = special.concat(lower);
//   }
//   else if (specialCharacters && upperCharacters) {
//     options = special.concat(upper);
//   }
//   else if (lowerCharacters && numberCharacters) {
//     options = lower.concat(number);
//   }
//   else if (lowerCharacters && upperCharacters) {
//     options = lower.concat(upper);
//   }
//   else if (numberCharacters && upperCharacters) {
//     options = number.concat(upper);
//   }
//   //The prompts below are for if the user seelcts only one of the four options
//   else if (numberCharacters) {
//     options = (number);
//   }
//   else if (specialCharacters) {
//     options = (special);
//   }
//   else if (upperCharacters) {
//     options = (upper);
//   }
//   else if (lowerCharacters) {
//     options = (lower);
//   }

//   //Adding the the password variable with an empty array
//   var password = [""];

//   //Code Works up until the lines below**************

//   //Creating the for variable whcih will help when generating random variables
//   for (var i = 0; i < begin; i++) {
//      var selectOptions = options[Math.floor(Math.random() * options.length)];
//      password.push(selectOptions);
//   }



// }


// //Function that will provide ransom characters based on selection by user........???
// generateBtn.addEventListener("click", writePassword); {
//   //Created a variable password that will generate using the variables in the parenthesis
//   var password = generatePassword(number, special, upper, lower);
//   var passwordText = document.querySelector("#password");
//   //
//   password.innerText = password;
//   //My variables i created that targets & corelates with the arrays.....should i have these variables here????
//   var numberCharacters;
//   var specialCharacters;
//   var upperCharacters;
//   var lowerCharacters;

// }

// //My code works up until this section with the prompts

// //Function that should generate and display the password based on the parameters chosen by the user.......???????
// function generatePassword (numberCharacters, specialCharacters, upperCharacters, lowerCharacters) {
//   var lowerCharacters = lower.value;
//   if (upperCharacters) {

//   }
// }






// // // Generate a random number
// // function getRandomNumber() {
// //   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// // }

// // // Generate random lowercase letter
// // function getRandomLower() {
// //   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// // }

// // // Generate random uppercase letter
// // function getRandomUpper() {
// //   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// // }

// // // Generate random special character
// // function getRandomSymbols() {
// //   var symbols = '~`!#$%^&*+=-[]\';,/{}|\":<>?';
// //   return symbols[Math.floor(Math.random() * symbols.length)];
// // }

