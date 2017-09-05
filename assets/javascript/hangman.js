//declare variables
var wrongLetter = 0;
var wrongGuessesLeft = 6
var words = [
              ["B","O","T","T","L","E"],
              ["D","I","A","P","E","R","S"],
              ["O","I","N","T","M","E","N","T"],
              ["R","A","T","T","L","E"],
              ["C","A","R","S","E","A","T"],
              ["C","R","I","B"],
              ["S","W","I","N","G"],
              ["M","I","L","K"],
              ["F","O","R","M","U","L","A"],
              ["N","E","W","B","O","R","N"],
              ["L","A","B","O","R"],
              ["S","T","R","O","L","L","E","R"],
              ["P","E","D","I","A","T","R","I","C","I","A","N"],
              ["P","R","E","N","A","T","A","L"],
              ["B","R","E","A","S","T","F","E","E","D","I","N","G"],
              ["O","N","E","S","I","E","S"],
              ["W","I","P","E","S"],
               ];
var random = (Math.floor(Math.random()*(words.length-1))); 
var randomWord = words[random]; 
var blanksAmount = new Array(randomWord.length);

//declare functions
for (var i = 0; i < blanksAmount.length; i++){
  blanksAmount[i] = "_ ";
    }

function printBlanks(){
  for (var i = 0; i < blanksAmount.length; i++){
  var blanks = document.getElementById("blanks");
  var newWord = document.createTextNode(blanksAmount[i]);
  blanks.appendChild(newWord);
  }
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var determineMatch = function(){
  var f = document.form; 
  var b = f.elements["userInput"]; 
  var userInput = b.value;
  userInput = userInput.toUpperCase();
  for (var i = 0; i < randomWord.length; i++){
    if(randomWord[i] === userInput){
      blanksAmount[i] = userInput + " ";
      var match = true;
    }
      b.value = "";
  }
  
//if no match is found, put user input in the wrong letters section of the doc, increase wronglettersguessed variable
  var blanks = document.getElementById("blanks");
  blanks.innerHTML=""; 
  printBlanks();
  if(!match){
    var wrongLetters = document.getElementById("wrongLetters");
    var newWord = document.createTextNode(" " + userInput);
    wrongLetters.appendChild(newWord); 
    wrongLetter ++;
    var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + wrongLetter + ".png";
    wrongGuessesLeft --;
    var wrong = document.getElementById("wrongGuesses");
    wrong.innerHTML= "<p>Wrong Guesses Left: " + wrongGuessesLeft + "</p>";
  }
  //check to see if all blanks have been filled, if not, the game continues
  var check = true;
  for (var i = 0; i < blanksAmount.length; i++){
    if(blanksAmount[i] === "_ "){
      check = false;
    }
  }
  //if all blanks have been filled, alert user they won the current game
  if(check){
    window.alert("You win!");
    location.reload();
  }
   //once the user gets to 6 wrong letters guessed in a game, alert user they lost the gam
  if(wrongLetter === 6){
    window.alert("Game over. The correct word was " + randomWord + "... better luck next time!");
    location.reload();
  }
    
}

function init(){
    printBlanks();
    console.log(randomWord);
}

//every time the window refreshes, start a new game
window.onload = init;