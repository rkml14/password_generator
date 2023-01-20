// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array to hold strings. expand this comment later
let upperArray= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let charArray = ["!",  "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];

//variables for function userOptions
let passwordLength = 0;
let upperCase = false;
let lowerCase = false;
let charCase = false;
let numCase = false;

// Write password to the #password input - Assignment Code
function writePassword() {
  let shouldContinue = userOptions();
  if (shouldContinue == false) return;  // To kick us out if user picks no options
  var password = generatePassword();  //   I  need to make a generatePassword function  *******
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button - Assignment Code
generateBtn.addEventListener("click", writePassword);


// Function to obtain data from user regarding length of password & use of letters, characters & numbers 

function userOptions() {  
  //Prompt to ask user what password length they desire
  passwordLength = parseInt(prompt("Choose a password length from between 8 to 128 characters:"));  //converts string into integer using parseInt
  if (isNaN(passwordLength)) {  // To check for non-integer input
    alert("Invalid selection. Please pick a number between 8 to 128 characters");
    return false;
  }
  //Check user inputed password length, if outside boundaries, return error message
  if (passwordLength <8 || passwordLength >128) {
    alert("Invalid password length.  Must between 8 to 128 characters.");
    return false;  //To kick us out if user picks outside the parameters
    };
  upperCase = confirm("Would you like uppercase letters?");
  lowerCase = confirm("Would you like lowercase letters?");
  charCase = confirm('Would you like special characters?');
  numCase = confirm("Would you like numbers?");

  if (upperCase == false && lowerCase == false && charCase == false && numCase == false) {
    alert('Invalid.  Must contain at least one of the options');
    return false;  //to kick us out if user doesn't pick any of the options
  };
  return true; //to make function userOptions return Boolean.  So we can use it whenever we call it 
}

function getRandomChar (arr) {
  let index = Math.floor(Math.random() * arr.length);
   return arr[index];
}


function generatePassword() {
  let password = "";
  let passwordArray = [];
  if (upperCase) {
    password += getRandomChar(upperArray);  // Adds random uppercase character to variable password
    passwordArray.push(...upperArray);
  }
  if (lowerCase) {
    password += getRandomChar(lowerArray); // Adds random lowercase character to variable password
    passwordArray.push(...lowerArray);
  }
  if (numCase) {
    password += getRandomChar(numArray); // Adds random numeriac character to variable password
    passwordArray.push(...numArray);
  }
  if (charCase) {
    password += getRandomChar(charArray); // Adds random character to variable password
    passwordArray.push(...charArray);
  }

  while (password.length < passwordLength) {  // While loop: Until password is the specified length from user inputed length, continue adding random characters to variable password
   password += getRandomChar(passwordArray);  // Add random characters from passwordArray to variable password using getRandomChar function
  }

  return password;
}