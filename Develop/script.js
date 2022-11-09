// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var pwdpool = [];
const pwdsymbol = ["!", "#", "$", "%", "&", "'", ":", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
const pwdletterU = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const pwdletterl = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const pwdnum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function generatePassword() {

  let ppwdsize = prompt("How many characters would you like your password to be? (8-128.)");
  let ppwdcasel = prompt("Would you like Lowercase letters in your password? (true/false answers only.)");
  let ppwdcaseu = prompt("Would you like Uppercase letters in your password? (true/false answers only.)");
  let ppwdnum = prompt("Would you like numbers in your password? (true/false answers only, if false only lowercase letters will be selected.)");
  let ppwdsymbol = prompt("Would you like special characters in your password? (true/false answers only.)");

  if (ppwdsize <= 7 || ppwdsize >=129 ) {
    alert("Invalid password size! Please reload the page and try again.")
  }
  if (ppwdcasel === "true") {
    var pwdpool = pwdletterl.concat(pwdpool); 
  }
  if (ppwdcaseu === "true") {
    var pwdpool = pwdletterU.concat(pwdpool);
  }
  if (ppwdnum === "true") {
    var pwdpool = pwdnum.concat(pwdpool);
  }
  if (ppwdsymbol === "true") {
    var pwdpool = pwdsymbol.concat(pwdpool);
  }
  if (ppwdcasel === "false" && ppwdcaseu === "false" && ppwdnum === "false" && ppwdsymbol === "false") {
   alert("Please reload the page and select one previous prompt as true");
  }

  
  console.log(pwdpool);

for (let i = 0; i < ppwdsize.length; i++) {
  passwordText = pwdpool[Math.floor(Math.random() * ppwdsize.length)];
}

console.log(passwordText);
    
    



}

  // let pwdinvalid = prompt("Reload the page and select at least one criteria as T (True)");










// create an empty string
// check if ppwdsymbol true
  //if true, add 1 symbol to string, - 1 ppwdsize
  //concat pwdsymbol into pwdpool

 // check if ppwdcaseu === true
    //if true, concat pwdletteru into pwdpool
    
  // check if ppwdnum === true
    //if true concat pwdnum into pwdpool

// loop and add on to pwd based on ppwdsize
  // randomly select from pwdpool
  // add on to string


 
    


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
