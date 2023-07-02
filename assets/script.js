var generateBtn = document.querySelector("#generate");

function writePassword() {
  // generatePassword returns back the whole generated password which then will be stored in var password
  var password = generatePassword();
  console.log(password);
  // Password will be typed in the input field #password when the generatePassword function will be executed
  var passwordText = document.querySelector("#password");
  //Puts the generated password on the page
  // Only if password is not undefined then show the password in a text field, so it wouldn't show "undefined" in that field
  if (password){
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //Promp asking how many characters a user wants
  // We put parseInt before .prompt window to convert the string we get from window.prompt and return it as a number 
  var passwordLength = parseInt(window.prompt("How many characters would you like in your password? (from 8 to 128 characters)"));
  if (isNaN(passwordLength)) {
    alert("It's not a number!");
    // We put return to exit the function
    return;
  };

  //We put ! to say if the length is less than 8 characters or greater than 128 characters then the user gets an alert
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Choose a password length between 8 or 128 characters!");
    // We put early return to exit the function
    return;
  }
  
  // Variables holding the information whether the user wants to include some characters or not; the statement appears in a confirmation window: ok - true, cancel - false
  var includeLowercase = window.confirm("Click OK if you want to include lower characters.");
  var includeUppercase = window.confirm("Click OK if you want to include uppercase characters.");
  var includeNumbers = window.confirm("Click OK if you want to include numeric characters.");
  var includeSpecials = window.confirm("Click OK if you want to include special characters.");

  //Variables holding all the characters which exist in a certain type of characters
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~" ];

  // Holds the whole list(characters) of what the user chooses
  var trueArray = [];

  // Truthy - falsy statements. If the statement evaluates to 'true' we execute the code. We get this information from our variables (we got the answers before from the confirm window)
  // e.g. put lowercase only if the user wants it there
  if (includeLowercase) {
    //We take our array where we keep all the stored choices and then put it into the statement. If the statement is true then we will add lowerLetters variable into that array (later we concat it with other character variables (depends on user choice))
    //We use .concat method to push an item from the array
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

  //An if statement with an alert in case the user doesn't choose any type of characters
  // !trueArray.length means the length is 0
  if (!trueArray.length) {
    alert("You need to choose at least one character type!");
    // We put return to exit the function
    return;
  } 

  // Made a variable to hold the value of randomly generated password, it's an empty string. Inside
  var finalPassword = "";
  // If i less than passwordLength then do it again, so we add i++ until we reach the number we have in passwordLength (that's the number the user put). This statement will be repeated the same number of times what the user put in prompt window how long he wants his password to be
  //Inside for loop we get random index then use random index to get a random character and we write down that random character to keep track of final password
  for (let i = 0; i < passwordLength; i++) {
    // We put Math.random() to randomize the choice; to get the random index value from trueArray, and then use that random index value to put it from the array. And we put *trueArray.length to have it exactly same length as the user wants
    var randomIndex = Math.floor(Math.random() * trueArray.length);
    //We get a random character from trueArray (trueArray includes few arrays) and add [randomIndex] which holds the random number of order from the array e.g [0], [9] and etc
    var randomCharacter = trueArray[randomIndex];
    // We add a random character in our final password
    finalPassword += randomCharacter;
  }
  // We put return to exit the function
  //return finalPassword sends the infromation back to writePassword function to finally write a password in the text field 
  return finalPassword;
}
