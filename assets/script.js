// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// This code is complete
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like in your password? (from 8 to 128 characters)");
  console.log(passwordLength);
  
  var characters = [includeLowercase, includeUppercase, includeNumbers, includeSpecials];
  // var for characters to store the info?

  var includeLowercase = window.confirm("Click OK if you want to include special characters.");
  var includeUppercase = window.confirm("Click OK if you want to include numeric characters.");
  var includeNumbers = window.confirm("Click OK if you want to include lowercase characters.");
  var includeSpecials = window.confirm("Click OK if you want to include uppercase characters.");

  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~" ];

// Take all true arrays and concat into new array???
  var trueArray = [];
  trueArray.push(lowerLetters, upperLetters, numericChars, specialChars);

}
generatePassword();

// Pseudo Code
// All changes go here
// function generatePassword() {
//   var passwordLength = window.prompt("How many characters would you like in your password? (from 8 to 128 characters)");
//   // var passwordInfo variable is holding information about the number of characters
//   // Prompt How many characters?
//   // Store the info - var for characters

//   // Confirm what types to use
//   var includeLowercase = window.confirm("Click OK if you want to include special characters.");
//   var includeUppercase = window.confirm("Click OK if you want to include numeric characters.");
//   var includeNumbers = window.confirm("Click OK if you want to include lowercase characters.");
//   var includeSpecials = window.confirm("Click OK if you want to include uppercase characters.");
//   // If yes then save this option? If no means it's going to be upper case, or just ask 4 times?

//   // What type of characters
//   // Special, number, upper, lower
//   // window.confirm (okay - true, cancel - false)

//   // Use answers to make password
//     // Vars that include all possible characters (make 4 vars)
//     // Separate vars for each type (put them in arrays)
//     // Example var upperLetters = ["A", "B", "C"] type everything inside the array one by one
//     var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",];
//     var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//     var specialChars = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~" ];
//     // How to add " sign?
//   // 

  

//   // Take all true arrays and concat into new array
//   // Choose random chars from arr based on input
//   // console.log(arr[(Math.floor(Math.random() * arr.length))]);
//   // Var .push method into new array
//   // var password = turn array into a string - use .toString() method

// let arr = ['JavaScript', 'array', 'to', 'string', 'example'];
// console.log(arr.toString());


//   // return password;
// }
