// Assignment code here
let alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphalength=alphabet.length
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  console.log(alphalength)
  
    let chars = alphabet;

let newPassword = "";
for (let i = 0; i < 8; i++) {

  newPassword += chars.charAt(Math.floor(Math.random() * alphalength));
  document.getElementById("password").innerHTML=newPassword
}
  
  
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
