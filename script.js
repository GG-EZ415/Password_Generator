// Assignment code here
//1) prompt() the user for the password criteria
  //-password must be between 8-125
  //-prompt () user if they want lower, upper, and/or special characters
  //2) validate the input
  //3) generate the password based on the criteria
  //4) display the password on the page  *DONE* (with the return function)

// Get references to the #generate element

alert("Hello there! please click below on the 'generate password' button and follow the prompts");
var generateBtn = document.querySelector("#generate");
var uppercase1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase1 = "abcdefghijklmnopqrstuvwxyz";
var numerals1 = "0123456789";
var symbols1 = "!@#$%^&*()";
//Tried to create a randamizer for the password
// function shuffleWord1 () {
//   var shuffledWord1 = '';
//   passwordLength = passwordLength.split('');
//      while (passwordLength.length > 0) {
//       shuffledWord1 +=  passwordLength.splice(passwordLength.length * Math.random() << 0, 1);
//    }
//    return "";
//   };
//   function shuffleWord2 () {
//     var shuffledWord2 = '';
//    chars = chars.split('');
//        while (chars.length > 0) {
//         shuffledWord2 +=  chars.splice(chars.length * Math.random() << 0, 1);
//      }
//      return "";
//     }; 

function generatePassword() {
  alert("The password can have\nUppercase letters\nLowercase Letters\nNumbers 0-9\nSpecial Characters such as !@#$%^&*()");
  // console.log("else works");
  var passwordLength = prompt("the password must be between 8-125 characters long");
  if ("" == null) {
    alert("your password didnt quite meet the criteria asked, please try again");
  } else {
  var uppercase = confirm("would you like capital letters?");
  var lowercase = confirm("would you like lowercase letters?");
  var numerals = confirm("would you like numbers?");
  var symbols = confirm("would you like special characters?");
  }

    console.log(lowercase,uppercase,numerals,symbols);

  var chars = "";
    if (uppercase == true) {
      chars += uppercase1;
    }
    if (lowercase == true) {
      chars += lowercase1;
    }
    if (numerals == true) {
      chars += numerals1;
    }
    if (symbols == true) {
      chars += symbols1;
    }
    return passwordLength + chars; 
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
