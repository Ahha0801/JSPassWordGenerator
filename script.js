// Assignment Code
var generateBtn = document.querySelector("#generate");
var choiceArr= "";

var password= "";


var uppercaseArr ="ABCDEFGHIJKLMOPQRSTUVWXYZ" 
var lowercaseArr ="abcdefgihjklmopqrstuvwxyz"
var specicalcharactersArr ="!@#$%^&*()+><?{}~"
var numberArr = "1234567890"

// var uppercaseArr = ["A","B","C","D","E","F","G","H","I", "J", "K","L", "M", "N","O", "P","Q", "R", "S","T","U", "V","W","X","Y","Z"];
// var lowercaseArr= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
// var specicalcharactersArr= [ "!", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];
// var numberArr=["1","2","3","4","5","6","7","8","9","0"];


function generatePassword (){
   var CharacterLength = parseInt(prompt("How long do you want the password to be? (In Please select a value between 8 and 128")); // NaN
      if(isNaN(CharacterLength) || CharacterLength < 8 || CharacterLength >128) { //hopefully this is fales 
        alert("Character Lenght has be longer, please try again");
        return false;
      }

      if (confirm("Do you want to include lowercase letters?")) {
      choiceArr+= lowercaseArr; 
    }
      if (confirm("Do you want to include uppercase letters?")) {
     choiceArr+= uppercaseArr;
    }
    if (confirm("Do you want to include Special characters in your password?")) {
      choiceArr+= specicalcharactersArr;
    }
    if (confirm("Do you want to include numbers in your password?")) {
      choiceArr+= numberArr;
    }
    


    for (var i = 0; i < CharacterLength; i++)  {
    password += choiceArr.charAt (Math.floor(Math.random() * choiceArr.length)
    )
    
  
    }
    return password
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
