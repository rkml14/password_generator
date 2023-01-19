// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array to hold strings. expand this comment later
let upperArray= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let charsArray = ["!",  "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];

//variables for userOptions
let passwordLength = 0;
let upperCase = false;
let lowerCase = false;
let userChar = false;
let userNum = false;


// Function to obtain data from user regarding length of password & use of letters, characters & numbers 

function userOptions() {  
//Prompt to ask user what password length they desire
  passwordLength = window.prompt("Choose a password length from between 8 to 128 characters:");
  //Check user inputed password length, if outside boundaries, return error message
  if (passwordLength <8 || passwordLength >128) {
    return "Invalid password length.  Must between 8 to 128 characters.";
    };
  upperCase = window.confirm("Would you like uppercase letters?");
  lowerCase = window.confirm("Would you like lowercase letters?");
  userChar = window.confirm('Would you like special characters?');
  userNum = window.confirm("Would you like numbers?");

  if (upperCase == false && lowerCase == false && userChar == false && userNum == false) {
    alert('Invalid.  Must contain at least one of the options');
    return;
  };

generatePassword();


}

function generatePassword() {


}


// Write password to the #password input - Assignment Code
function writePassword() {
  var password = generatePassword();  //   I  need to make a generatePassword function  *******
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button - Assignment Code
generateBtn.addEventListener("click", writePassword);






//all my tossed code to hold




// let index = Math.floor(Math.random() * passwordLength);





//To include or not include upperCase, lowerCase, numeric, chars
// let options = ["Y", "y"];


// let userUpper = window.prompt("Would you like uppercase letters?");
//   if (upperCase == "Y" || upperCase =="y"); {

//   }
//   else {
//     window.alert("No Uppercase will be used");
//   }

// let userLower = window.prompt("Would you like lowercase letters?");
//   if (lowerCase == "Y" || lowerCase =="y"); {

//   }
//   else {
//     window.alert("No lowercase will be used");
//   }
// let userNum = window.prompt("Would you like numbers?");
//   if (userNum == "Y" || userNum =="y"); {

//   }
//   else {
//     window.alert("No numbers will be used");
//   }
// let userChar = window.prompt("Would you like special characters?");
//   if (userChar == "Y" || userChar =="y");{

//   }
//   else {
//     window.alert("No characters will be used");
//   }






//  let index = Math.floor (Math.random() * passwordLength.length);