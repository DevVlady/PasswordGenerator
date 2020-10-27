// Assignment Code - Original
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - Original
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button - Original
generateBtn.addEventListener("click", writePassword);

// Re-write the "add event listener to generate button" line above - Vlad
generateBtn.addEventListener('click', () => {
  // var length = lengthCharacters.value
  var hasLower = lowercaseCharacters.confirm;
  var hasUpper = uppercaseCharacters.confirm;
  var hasSymbols = specialCharacters.confirm;
  var hasNumbers = numberCharacters.prompt;
  var password = passwordText.value;
  passwordText.value = password;

  generateBtn.innerText = writePassword(
    hasLower,
    hasUpper,
    hasSymbols,
    hasNumbers,
    length
    );
});

// Generate password function
function writePassword(lower, upper, symbols, numbers, length) {

  var password = writePassword();
  var passwordText = document.querySelector("#password");


  let writePassword = "";
  var typesCount = lower + upper + symbols + numbers + length;

  console.log('typesCount: ', typesCount);

  var typesArr = [{lower}, {upper}, {numbers}, {symbols}, {length}].filter
  (
    item => Object.values(item) [0]
  );

  console.log('typesArr ', typesArr);

  if(typesCount === 0) {
    return '';
  }

  for(let i =0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);

      writePassword += randomFunc[funcName]();
    });
  }

  var finalPassword = writePassword.slice(0, length);

  return finalPassword;
}


// My work below this line






// Variables with possible characters
// var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789" + "!@#$%&*,.;:";
// var specialCharacters = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
// var possibilities = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
//  'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
//  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



// Prompts - Asking the user to select options before generating password based on their specifications
var lengthCharacters = prompt("How many characters would you like?");
var numberCharacters = confirm("Do you want numbers?");
var specialCharacters = confirm("Do you want special characters?");
var uppercaseCharacters = confirm("Do you want uppercase characters?");
var lowercaseCharacters = confirm("Do you want lowercase characters?");




// Functions in the works

// for (i = 1; i < characters.length; i++) {
//   alert("Your password is too short..please select between 8 & 125 characters.");
// }



//Generator Functions
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbers: getRandomNumber,
  // symbols: getRandomSymbol
}



// Generate a random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Generate random lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Generate random uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Generate random special character
function getRandomSymbols() {
  var symbols = '~`!#$%^&*+=-[]\';,/{}|\":<>?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Used function to check if my functions work properly and they do
console.log(getRandomNumber());
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomSymbols());


// Changed generatePassword to writePassword