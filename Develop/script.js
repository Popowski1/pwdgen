// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Defines available criteria

const pwdsymbol = ["!", "#", "$", "%", "&", "'", ":", "*", "+", ",", "-", ".", "<", "=", ">", "?", "@"];
const pwdletterU = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const pwdletterl = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const pwdnum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function generatePassword() {

  // starts with an empty pool to add criteria to

  var pwdpool = [];

  // Prompts user to define criteria for password

  let ppwdsize = Number(prompt("How many characters would you like your password to be? (8-128.)"));
  let ppwdcasel = prompt("Would you like Lowercase letters in your password? (true/false answers only.)");
  let ppwdcaseu = prompt("Would you like Uppercase letters in your password? (true/false answers only.)");
  let ppwdnum = prompt("Would you like numbers in your password? (true/false answers only, if false only lowercase letters will be selected.)");
  let ppwdsymbol = prompt("Would you like special characters in your password? (true/false answers only.)");

  // logical statements to implement criteria into pool of characters

  if (ppwdsize <= 7 || ppwdsize >=129 ) {
    alert("Invalid password size! Please reload the page and try again.")
  }
  if (ppwdcasel === "true") {
    var pwdpool = pwdletterl.concat(pwdpool); 
    console.log(pwdpool, "added lowercase to pool");
  }
  if (ppwdcaseu === "true") {
    var pwdpool = pwdletterU.concat(pwdpool);
    console.log(pwdpool, "added uppercase to pool");
  }
  if (ppwdnum === "true") {
    var pwdpool = pwdnum.concat(pwdpool);
    console.log(pwdpool, "added numbers to pool");
  }
  if (ppwdsymbol === "true") {
    var pwdpool = pwdsymbol.concat(pwdpool);
    console.log(pwdpool, "added symbols to pool");
  }
  if (ppwdcasel === "false" && ppwdcaseu === "false" && ppwdnum === "false" && ppwdsymbol === "false") {
   alert("Please reload the page and select one previous prompt as true");
  }
  console.log(pwdpool);
  
// for loop to add from pool of characters to password.

  var pw1 = "";
for (let i = 0; i < ppwdsize; i++) {
  pw1 = pw1 + pwdpool[Math.floor(Math.random() * (pwdpool.length -0) +0 )];
  
  

}
console.log(pw1);
return pw1


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
