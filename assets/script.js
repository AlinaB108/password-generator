var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  if (password){
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = parseInt(window.prompt("How many characters would you like in your password? (from 8 to 128 characters)"));
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Choose a password length between 8 or 128 characters!");
    return;
  }

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


  if (!trueArray.length) {
    alert("You need to choose at least one character type!");
    return;
  } 

  var finalPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * trueArray.length);
    var randomCharacter = trueArray[randomIndex];
    finalPassword += randomCharacter;
  }
  return finalPassword;
}
