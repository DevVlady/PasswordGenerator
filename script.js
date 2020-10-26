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



// Variables with possible characters
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789" + "!@#$%&*,.;:";
var specialCharacters = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
var possibilities = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]









// Notes
var numberCharacters = prompt("How many characters would you like?");
var specilCharacters = confirm("Do you want special characters?");
var uppercaseCharacters = confirm("Do you want uppercase characters?");
var lowercaseCharacters = confirm("Do you want lowercase characters?");

// if (numberCharacters < 8) {
//   return
// }


