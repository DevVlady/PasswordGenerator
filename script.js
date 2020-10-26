// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Functions



// Notes
var confirmCharacters = prompt("How many characters would you like?");
var specilCharacters = confirm("Do you want special characters?");
var uppercaseCharacters = confirm("Do you want uppercase characters?");
var lowercaseCharacters = confirm("Do you want lowercase characters?");