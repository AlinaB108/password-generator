// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// This code is complete
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  if (password){
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  //Prompt how many characters
  var passwordLength = parseInt(window.prompt("How many characters would you like in your password? (from 8 to 128 characters)"));
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Choose a password length between 8 or 128 characters!");
    return;
  }

  // window.confirm what type of characters
  var includeLowercase = window.confirm("Click OK if you want to include lower characters.");
  var includeUppercase = window.confirm("Click OK if you want to include uppercase characters.");
  var includeNumbers = window.confirm("Click OK if you want to include numeric characters.");
  var includeSpecials = window.confirm("Click OK if you want to include special characters.");

  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~" ];

  var trueArray = [];

  if (includeLowercase) {
    trueArray = trueArray.concat(lowerLetters);
  }
  
  if (includeUppercase) {
    trueArray = trueArray.concat(upperLetters);
  }

  if (includeNumbers) {
    trueArray = trueArray.concat(numericChars);
  }

  if (includeSpecials) {
    trueArray = trueArray.concat(specialChars);
  }
  // return trueArray;

  if (!trueArray.length) {
    alert("You need to choose at least one character type!");
    // Exits the function
    return;
  } 

  var finalPassword = "";
  // How many times to do this
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * trueArray.length);
    var randomCharacter = trueArray[randomIndex];
    finalPassword += randomCharacter;
  }
  return finalPassword;

  // Vars for each type of character
  

// Take all true arrays and concat into new array???

}
// generatePassword();

// Acceptance Criterias
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// // Pseudo Code
// // All changes go here

// function generatePassword() {
//   // prompt how many characters
//   // var for charcters

//   // What types of characters
//   // special, number, upper, lower
//   // window.confirm

//   // Use answers to make password
//   // vars that include all possible charcters
//   // seperate vars for each type, arrays
//   // example var upperLetters = ["A", "B", "C"]

//   // take all true arrays and concat into new array -loop
//   // choose random chars from arr based on user input
//   // var push into new array
// // var password = turn array into string .toString()

// // return password;
// }
