// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array to hold strings. expand this comment later
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let chars = ["!",  "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];

//To include or not include upperCase, lowerCase, numeric, chars
let options = ["Y", "y"];

function generatePassword(){
//Prompt to ask user fwhat password length they desire
let passwordLength = window.prompt("Choose a password length from between 8 to 128 characters:");

}

// Write password to the #password input - Assignment Code
function writePassword() {
  var password = generatePassword();  //   I  need to make a generatePassword function  *******
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button - Assgignment Code
generateBtn.addEventListener("click", writePassword);
