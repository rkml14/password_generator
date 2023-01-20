//Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays to hold strings. One array for each type of character case: upper, lower, numeric & character
let upperArray= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let charArray = ["!",  "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];

//Global variables for function userOptions to record user choices regarding password options.  First variable is an integer, balance are boolean
let passwordLength = 0;
let upperCase = false;
let lowerCase = false;
let charCase = false;
let numCase = false;

//Write password to the #password input - Assignment Code
function writePassword() {
  let shouldContinue = userOptions();
  if (shouldContinue == false) return;  // Ends program if user picks none of the upper, lower, numeric or character options 
  var password = generatePassword();  //   Assignment Code - had to code function generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Add event listener to generate button - Assignment Code
generateBtn.addEventListener("click", writePassword);

//Function to obtain data from user regarding length of password & use of letters, characters & numbers 
function userOptions() {  
  // Prompt to ask user what password length they desire
  passwordLength = parseInt(prompt("Choose a password length from between 8 to 128 characters:"));  //converts string into integer using parseInt
  if (isNaN(passwordLength)) {  // To check for non-integer input, ends program if user enters a non-numeric value
    alert("Invalid selection. Please pick a number between 8 to 128 characters");
    return false;
  }
  // Check user inputed password length; if outside boundaries, return error message
  if (passwordLength <8 || passwordLength >128) {
    alert("Invalid password length.  Must between 8 to 128 characters.");
    return false;  //Ends program if user picks outside the parameters
    };
  // Window prompts to user to confirm character types desired in password
  upperCase = confirm("Would you like uppercase letters?");
  lowerCase = confirm("Would you like lowercase letters?");
  charCase = confirm('Would you like special characters?');
  numCase = confirm("Would you like numbers?");
// Checks to see if user selected no character types whatsoever, if all false, return alert & end program
  if (upperCase == false && lowerCase == false && charCase == false && numCase == false) {
    alert('Invalid.  Must contain at least one of the options');
    return false;  // Ends program if user doesn't pick any of the character type options
  };
  return true; // To make function userOptions return a Boolean so the result can be called in function writePassword 
}

//Function to generate a random character type in the function generatePassword & store it in an array
function getRandomChar (arr) {
  let index = Math.floor(Math.random() * arr.length);  
   return arr[index];
}

//Function to generate the actual password
function generatePassword() {
  //Create & initialize 2 local scope variables for the function
  let password = "";
  let passwordArray = [];
  if (upperCase) {
    password += getRandomChar(upperArray);  // Adds random uppercase character to variable password
    passwordArray.push(...upperArray);  //Pushes each upperArray element into the passwordArray
  }
  if (lowerCase) {
    password += getRandomChar(lowerArray); // Adds random lowercase character to variable password
    passwordArray.push(...lowerArray); //Pushes each lowerArray element into the passwordArray
  }
  if (numCase) {
    password += getRandomChar(numArray); // Adds random numeriac character to variable password
    passwordArray.push(...numArray); //Pushes each numArray element into the passwordArray
  }
  if (charCase) {
    password += getRandomChar(charArray); // Adds random character to variable password
    passwordArray.push(...charArray); //Pushes each charArray element into the passwordArray
  }
  while (password.length < passwordLength) {  // While loop runs until password is the specified length from user inputed length and will continue adding random characters to variable password
   password += getRandomChar(passwordArray);  // Add random characters from passwordArray to variable password using getRandomChar function
  }
  return password;  //Returns the password into the window
}