 var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var numberArray=["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Write password to the #password input




// Add event listener to generate button

*/

//first a welcome prompt
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = parseInt(
    window.prompt(
      "Hey There! Welcome to the password generator! Please follow this series of prompts to generate a secure password. You must select at least one criterion in order to generate a secure password. For starters, how long would you like your password?(It must be at least 8 up to 128 characters in length)"
    )
  );
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert(
      "Unfortunately the response you've entered is out of range. Please try again."
    );
    return;
  } else {
    alert(
      "Alright! Your password will be " + passwordLength + " characters long!"
    );
  }
  var passwordLower = window.confirm(
    "Would you like your password to contain any lower case characters?"
  );
  if (passwordLower) {
    alert("You got it! Your password will now contain lower case characters.");
  } else {
    alert("Alrighty! No lower case characters for you!");
  }
  var passwordUpper = confirm(
    "Would you like your password to contain any upper case characters?"
  );
  if (passwordUpper) {
    alert(
      "Your wish is my command! Your password will contain upper case characters."
    );
  } else {
    alert("FINE THEN. NO CAPITALS FOR YOU!");
  }
  var passwordNumerical = window.confirm(
    "Would you like your pasword to contain any numerical characters?"
  );
  if (passwordNumerical) {
    alert(
      "Wow, your password is going to be like, really strong. Your password will contain numerical characters."
    );
  } else {
    alert(
      "Your loss, numbers are fun. Your password will not contain any numerical characters."
    );
  }
  var passwordSymbol = window.confirm(
    "Would you like your password to contain any symbol characters?"
  );
  if (passwordSymbol) {
    alert("How very symbolic. Your password will contain symbol characters.");
  } else {
    alert("Picky, picky, picky. No symbol characters in your password.");
  }

  if (
    passwordLower === false &&
    passwordNumerical === false &&
    passwordUpper === false &&
    passwordSymbol === false
  ) {
    alert("At least one criterion must be selected. Please try again.");
    return;
  }
  var userOptions = {
    length: passwordLength,
    upper: passwordUpper,
    lower: passwordLower,
    number: passwordNumerical,
    symbol: passwordSymbol,
  };
  /*var result=[];
  var possibleChars= [];
  var guaranteeChars=[]; */
  if (userOptions.lower) {
      result.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97))
    );
    /*possibleChars=possibleChars.concat(lowerCasedCharacters)
    guaranteeChars.push(getRandom(lowerCasedCharacters)) */
  }
  if (userOptions.upper) {
     result.push( String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    /*possibleChars=possibleChars.concat(upperCasedCharacters)*/
  }
  if (userOptions.number) {
    result.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
    /*possibleChars=possibleChars.concat(numberArray) */
  }
  if (userOptions.symbol) {
     const symbols = "#!$%&'()*+,-./:;<=>?@[]^_`{|}~ ";
     result.push(symbols[Math.floor(math.random() * symbols.length)]);
//possibleChars=possibleChars.concat(specialCharacters)
  }
  
  
  
  
  
  
  var completePassword = [];

  return completePassword;


}

function getRandom(array){
  var random = Math.floor(Math.random() * array.length);
  var randomElement= array[random]
  return randomElement;

}
/*function completePassword() {
  
  );

  //make them select criteria (state they must choose at least one criterion)
 


  return userOptions;
}

function generatePassword() {
  var options = completePassword();
  if (options.lower) {
    
  }
}

/*function getRandomLower(passwordLower) {
   ;
    Array.push(string.from);
  }
  function getRandomUpper(passwordUpper) {
    
  }
  function getRandomNumber(passwordNumerical) {
    
  }
  function getRandomSymbol(passwordSymbol) {
    
  }
*/

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

//generate password

//write password to the page
