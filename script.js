//adding object for form
var form = document.getElementById('passwordGeneratorForm');
var passwordDisplay = document.getElementById('passwordDisplay');

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

// For testing purposes console.log(UppercaseArray);

//use conversion function to convert uppercase array to lowercase
var LowercaseArray = UppercaseArray.map(function (converttolowercase) {
  return converttolowercase.toLowerCase();
});

// For testing purposes console.log(LowercaseArray);

var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//For testing purposes console.log(numbersArray);

var symbolsArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// link to generate password button
var generateBtn = document.querySelector("generate");

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol

}


//event listener to take values from form in HTML
generate.addEventListener("click", e => {
  var takecharacterLength = lengthHTML.value;
  var includeuppercase = uppercaseHTML.checked;
  var includelowercase = lowercaseHTML.checked;
  var includenumbers = numbersHTML.checked;
  var includesymbols = symbolsHTML.checked;

  resultEl.innerText = generatePassword(array);
});



// Write password to the #password input
function generatePassword (takecharacterlength, includeuppercase, includelowercase, includenumbers, includesymbols) {
  let charCodes = LowercaseArray
  if (includeuppercase) charCodes = charCodes.concat(UppercaseArray)
  if (includesymbols) charCodes = charCodes.concat(symbolsArray)
  if (includenumbers) charCodes = charCodes.concat(numbersArray)

  var password = []
  for (let i = 0; i < takecharacterLength; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    password.push(String.fromCharCode(characterCode))
  }
  return password.join('');
}


function array(low, high) {
  var array = [UppercaseArray, LowercaseArray, numbersArray, symbolsArray]
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}



function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)