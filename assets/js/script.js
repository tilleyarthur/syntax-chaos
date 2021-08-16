// Assignment code here
var length;
var number;
var specialCharacter;
var upperCase;
var lowerCase;
var selection;
var lettersUp;

const characters = ["number", "letters", "lettersUp", "character"];

number = "0123456789";
letters = "abcdefghijklmnopqrstuvwxyz";
lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
character = "!@#$%^&*)(";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  // Begin setting password parameters
  function generatePassword() {
    var numConfirm = ("0123456789");
  // Select # of characters for new password
    length = prompt("Enter the number of characters you'd like for your new password (Select a number between 8-128)");
    if (!length) {
      alert("Please make a valid entry");
    } else if (length < 8 || length > 128) {
    // Function recognizes incorrect input
    length = prompt("New password must be from 8-128 characters");
    } else {
    // Prompts continue when length input is valid
    specialCharacter = confirm("Include special characters in your new password?");
    upperCase = confirm("Include uppercase letters?");
    lowerCase = confirm("Include lowercase letters?");
    number = alert("Include numbers in your new password?");
    };
    // for all of the above true
    if (numConfirm && specialCharacter && upperCase && lowerCase) {
      selection = character.concat(numConfirm,letters,lettersUp);
    }
    // three options selected
    else if (numConfirm && specialCharacter && upperCase) {
      selection = character.concat(numConfirm, lettersUp);
    }
    else if (specialCharacter && upperCase && lowerCase) {
      selection = character.concat(letters, lettersUp);
    }
    else if (upperCase && lowerCase && numConfirm) {
      selection = lettersUp.concat(letters, numConfirm);
    }
    else if (lowerCase && numConfirm && specialCharacter) {
      selection = letters.concat(numConfirm, character);
    }
    //two options selected
    else if (specialCharacter && numConfirm) {
      selection = character.concat(numConfirm);
    }
    else if (numConfirm && upperCase) {
      selection = numConfirm.concat(lettersUp);
    }
    else if (upperCase && lowerCase) {
      selection = lettersUp.concat(letters);
    }
    else if (lowerCase && numConfirm) {
      selection = letters.concat(numConfirm);
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
    else if (numConfirm) {
      selection = numConfirm;
    }
    else if (lowerCase) {
      selection = letters;
    }
    else if (upperCase) {
      selection = lettersUp;
    };
    // Cannot determine how to complete this part
    var finalPassword = "";
    
    for(var i = 0; i < length; i++){
    var randomPass = Math.floor(Math.random() * selection);
    var random = selection[randomPass];
    console.log(randomPass)
    
    finalPassword+=randomPass;
    }

  return finalPassword 
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);