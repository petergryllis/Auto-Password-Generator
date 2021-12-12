//link to html DOM elements
var passwordHTML = document.getElementById("password");
var lengthHTML = document.getElementById("length");
var uppercaseHTML = document.getElementById("uppercase");
var lowercaseHTML = document.getElementById("lowercase");
var numbersHTML = document.getElementById("numbers");
var symbolsHTML = document.getElementById("symbols");

//Establish Arrays for the different variables that
//can be used to generate password i.e. uppercase, lowercase,
//numbers and symbols
var UppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//console.log markers to check that array is logged in console - for testing purposes
// console.log(UppercaseArray);

//use conversion function to convert uppercase array to lowercase
var LowercaseArray = UppercaseArray.map(function (converttolowercase) {
  return converttolowercase.toLowerCase();
});

//console.log markers to check that array is logged in console - for testing purposes
// console.log(LowercaseArray);



// link to generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
