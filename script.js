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

  resultEl.innerText = generatePassword(takecharacterLength, includeuppercase, includelowercase, includenumbers, includesymbols);
});



// Write password to the #password input
function generatePassword(lower, upper, number, symbol, takecharacterLength) {
  let generatedPassword = '';
  var typesCount = lower + upper + number + symbol;
  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    if(typesCount === 0) {
      return '';
    }

    for(let i=0; i<length; i+=typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
    
    const finalPassword = generatedPassword.slice(0, length);
    
    return finalPassword;
  }

//   let charCodes = LowercaseArray
//   if (includeuppercase) charCodes = charCodes.concat(UppercaseArray)
//   if (includesymbols) charCodes = charCodes.concat(symbolsArray)
//   if (includenumbers) charCodes = charCodes.concat(numbersArray)

//   var password = []
//   for (let i = 0; i < takecharacterLength; i++) {
//     var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
//     password.push(String.fromCharCode(characterCode))
//   }
//   return password.join('');
// }


// function getRandomLower(low, high) {
//   var array1 = [LowercaseArray]
//   for (let i = low; i <= high; i++) {
//     array1.push(i)
//   }
//   return array1
// }

// function getRandomUpper(low, high) {
//   var array2 = [UppercaseArray]
//   for (let i = low; i <= high; i++) {
//     array2.push(i)
//   }
//   return array2
// }
// function getRandomNumber(low, high) {
//   var array3 = [numbersArray]
//   for (let i = low; i <= high; i++) {
//     array3.push(i)
//   }
//   return array3
// }

// function getRandomSymbol(low, high) {
//   var array4 = [symbolsArray]
//   for (let i = low; i <= high; i++) {
//     array4.push(i)
//   }
//   return array4
// }}


function getRandomLower() {
	const lower = 'abcdefghijklmnopqrstuvwxyz'
	return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomUpper() {
	const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	return upper[Math.floor(Math.random() * uppper.length)];
}

function getRandomNumber() {
	const numbers = '0123456789'
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}