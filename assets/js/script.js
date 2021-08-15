// Assignment code here
var length;
var number;
var specialCharacter;
var upperCase;
var lowerCase;
var selection;
var lettersUp

const characters = ["number", "lettersD", "character"];

number = "0123456789";
lettersD = "abcdefghijklmnopqrstuvwxyz";
lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
character = "!@#$%^&*)(";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Begin setting password parameters
function generatePassword() {
  // Select # of characters for new password
  length = prompt("Enter the number of characters you'd like for your new password (Select a number between 8-128)");
  if (!length) {
    alert("Please make a valid entry");
  } else if (length < 8 || length > 128) {
    // Function recognizes incorrect input
    length = prompt("New password must be from 8-128 characters");
  } else {
    // Prompts continue when length input is valid
    number = confirm("Include numbers in your new password?");
    specialCharacter = confirm("Include special characters in your new password?");
    upperCase = confirm("Include uppercase letters?");
    lowerCase = confirm("Include lowercase letters?");
  };
  // for all of the above true
  if (number && specialCharacter && upperCase && lowerCase) {
    selection = character.concat(number,lettersD,lettersUp);
  }
  // three options selected
  else if (number && specialCharacter && upperCase) {
    selection = character.concat(number, lettersUp);
  }
  else if (specialCharacter && upperCase && lowerCase) {
    selection = character.concat(lettersD, lettersUp);
  }
  else if (upperCase && lowerCase && number) {
    selection = lettersUp.concat(lettersD, number);
  }
  else if (lowerCase && number && specialCharacter) {
    selection = lettersD.concat(number, character);
  }
  //two options selected
  else if (specialCharacter && number) {
    selection = character.concat(number);
  }
  else if (number && upperCase) {
    selection = number.concat(lettersUp);
  }
  else if (upperCase && lowerCase) {
    selection = lettersUp.concat(lettersD);
  }
  else if (lowerCase && number) {
    selection = letters.concat(number);
  }
  else if (lowerCase && specialCharacter) {
    selection = letters.concat(character);
  }
  else if (specialCharacter && upperCase) {
    selection = character.concat(lettersUp);
  }
  //one option
  else if (specialCharacter) {
    selection = character;
  }
  else if (number) {
    selection = number;
  }
  else if (lowerCase) {
    selection = letters;
  }
  else if (upperCase) {
    selection = lettersUp;
  };
  return selection;

  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);