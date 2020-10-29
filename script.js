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

//My NEW & OFFICIAL code

//My variables ....Confirmed
var confirmNumbers;
var confirmUppercase;
var confirmLowercase;
var confirmSpecial;
var askQuestions

//My variables created for the random functions in the if statements
var numbersRandom;
var uppercaseRandom;
var lowercaseRandom;
var specialRandom;
var passphrase = [];
var tempArray = [];


//My arrays & empty arrys that will store my responses
// var choices = "";
var answers = {
confirmNumbers:confirmNumbers,
confirmLowercase:confirmLowercase,
confirmUppercase:confirmUppercase,
confirmSpecial:confirmSpecial,
}
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "?", "+", "`"];


//The function used to generate the password
function generatePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //Creating the equation that will prompt the user to input a value
  var userLen = parseInt(prompt("Please choose the number of characters between 8 & 128 in order to begin!"));

  //Checks users input to ensure it meets criteria...will prompt message if criteria is not met
  if  (userLen < 8 || userLen > 128) {
    alert("Please enter a valid length & try again!");
    userLen = parseInt(prompt("Please enter a number between 8 & 128 & try again"));
    console.log(userLen);
  }

  //Function to return the prompt should the user select length outside the paramters
  // function getUserAnswers() {
  //   // var userLen = parseInt(prompt("Please choose the number of characters between 8 & 128 in order to begin!"));
  //   if  (userLen < 8 || userLen > 128) {
  //     alert("Please enter a valid length & try again!");
  //     userLen = parseInt(prompt("Please enter a number between 8 & 128 & try again"));
  //     console.log(userLen);
  //   }
  //   if (askQuestions) {
  //     confirmNumbers = confirm("Would you like to include numbers in your password?");
  //     confirmUppercase = confirm("Would you like to include uppercase letters in your password?");
  //     confirmLowercase = confirm("Would you like to include lowercase letters in your password?");
  //     confirmSpecial = confirm("Would you like to include special characters in your password?");
  //   }
  // }

  //My variables that store the users response

  confirmNumbers = confirm("Would you like to include numbers in your password?");
  confirmUppercase = confirm("Would you like to include uppercase letters in your password?");
  confirmLowercase = confirm("Would you like to include lowercase letters in your password?");
  confirmSpecial = confirm("Would you like to include special characters in your password?");


  if (confirmNumbers) {
    // var numbersRandom = numberCharacters(Math.floor(Math.random() * numberCharacters.length));
    answers.confirmNumbers = true;
    passphrase = passphrase.concat(numberCharacters);
    console.log(confirmNumbers);
  }
  if (confirmUppercase) {
    // var uppercaseRandom = uppercaseCharacters(Math.floor(Math.random() * uppercaseCharacters.length));
    answers.confirmUppercase = true;
    passphrase = passphrase.concat(uppercaseCharacters);
    console.log(confirmUppercase);
  }
  if (confirmLowercase) {
    // var lowercaseRandom = lowercaseCharacters(Math.floor(Math.random() * lowercaseCharacters.length));
    answers = confirmLowercase = true;
    passphrase = passphrase.concat(lowercaseCharacters);
    console.log(confirmLowercase);
  }
  if (confirmSpecial) {
    // var specialRandom = specialCharacters(Math.floor(Math.random() * specialCharacters.length));
    answers = confirmSpecial = true;
    passphrase = passphrase.concat(specialCharacters);
    console.log(confirmSpecial);
  }
  //For loop in order for this function to wrap around based on the user response
  for (var i = 0; i < userLen; i++) {
    var index = Math.floor(Math.random() * passphrase.length);
    tempArray.push(passphrase[index]);
  }
  let temp2 = tempArray.join("");
  console.log(temp2);
  //Adding the return after the loop in order to return our value
  return answers = temp2;
}

