// Assignment Code
var generateBtn = document.querySelector("#generate");
var choiceArr= [];
var uppercaseArr = ["A","B","C","D","E","F","G","H","I", "J", "K","L", "M", "N","O", "P","Q", "R", "S","T","U", "V","W","X","Y","Z"];
var lowercaseArr= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var specicalcharactersArr= [ "!", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];
var numberArr=["1","2","3","4","5","6","7","8","9","0"];
var CharacterLenght= [8-20]

function passwordcriteria (){
    CharactersLength = prompt ("How long do you want the password to be?InPlease select a value between 8 and 128")
      if(isNaN(CharacterLenght) || CharacterLength < 8 || CharacterLenght >128) {
        alert( "Character Lenght has be longer, please try again");
        return false;
       
      }
var includeSpecialCharacters = confirm("Do you want to include special characters?")

var includeUppercase = confirm ("Do you want to include uppercase letters?")
var includeLowercase = confirm( "Do you want to include lowercase letters?"
var includeNumbers = confirm("Do you want to include numbers?")
}


function generatePassword() {thing in here
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
