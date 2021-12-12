//link to html DOM elements
var passwordHTML = document.getElementById("password");
var lengthHTML = document.getElementById("length");
var uppercaseHTML = document.getElementById("uppercase");
var 













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
