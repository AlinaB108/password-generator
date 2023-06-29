// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// This code is complete
function writePassword() {
  var password = generatePassword(length, lowercase, uppercase, numeric, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Pseudo Code
// All changes go here
function generatePassword() {
  // Prompt How many characters?
  // Store the info - var for characters

  // What type of characters
  // Special, number, upper, lower
  // window.confirm (okay - true, cancel - false)

  // Use answers to make password
  // Vars that include all possible characters (make 4 vars)
  // Separate vars for each type (put them in arrays)
  // Example var upperLetters = ["A", "B", "C"] type everything inside the array one by one

  // Take all true arrays and concat into new array
  // Choose random chars from arr based on input
  // Var .push method into new array
  // var password = turn array into a string - use .toString() method

  // return password;
}

