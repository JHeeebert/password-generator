var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


var generateBtn = document.querySelector("#generate");
// Starts function to generate password
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for password 
  if (!enter) {
      alert("You must enter a number!");
  } else if (enter < 8 || enter > 128) {
      // Validates user input
      // prompts user to add # between 8-128 if enter is hit with no numbers entered
      enter = parseInt(prompt("Try again, please choose a # between 8 and 128"));

  } else {
      // Continues once user input is validated
      confirmNumber = confirm("Do you want numbers in Password?");
      confirmCharacter = confirm("Do you want special characters in Password?");
      confirmUppercase = confirm("Do you want Uppercase letters?");
      confirmLowercase = confirm("Do you want Lowercase letters?");
  };
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


