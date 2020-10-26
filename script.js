// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  for (i = 1; i < characters.length; i++) {
    alert("Your password is too short..please select between 8 & 125 characters.");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Variables
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789" + "!@#$%&*,.;:";









// Notes
var numberCharacters = prompt("How many characters would you like?");
var specilCharacters = confirm("Do you want special characters?");
var uppercaseCharacters = confirm("Do you want uppercase characters?");
var lowercaseCharacters = confirm("Do you want lowercase characters?");

// if (numberCharacters < 8) {
//   return
// }


