var wines = [
["C","A","B","E","R","N","E","T","S","A","U","V","I","G","N","O","N"],
  ["C","H","A","R","D","O","N","N","A","Y"],
  ["H","E","R","A"],
  ["M","A","L","B","E","C"],
  ["M","E","R","L","O","T"],
  ["M","O","S","C","A","T","O"],
  ["P","I","N","O","T","G","R","I","G","I","O"],
  ["P","I","N","O","T","N","O","I","R"],
  ["R","I","E","S","L","I","N","G"],
  ["S","A","U","V","I","G","N","O","N","B","L","A","N","C"],
  ["S","H","I","R","A","Z"],
  ["Z","I","N","F","A","N","D","E","L"]
]
var random = Math.floor((Math.random()*(wines.length-1))); 
var randWine = wines[random]; 
var newNew = new Array(randWine.length);
var wrongLetter = 0;
var wins = 0;
var losses = 0;
var wrongGuessesLeft = 6
for (var i = 0; i < newNew.length; i++){
  newNew[i] = "_ ";
}
function printNewNew(){
  for (var i = 0; i < newNew.length; i++){
  var rateField = document.getElementById("rateField");
  var newWord = document.createTextNode(newNew[i]);
  rateField.appendChild(newWord);
  }
}
//checks if the the letter provided by the user matches one or more of the letters in the word
var determineMatch = function(){
  var f = document.form; 
  var b = f.elements["rateSize"]; 
  var size = b.value;
  size = size.toUpperCase();
  for (var i = 0; i < randWine.length; i++){
    if(randWine[i] === size){
      newNew[i] = size + " ";
      var match = true;
    }
  b.value = "";
  }
  var rateField = document.getElementById("rateField");
  rateField.innerHTML=""; 
  printNewNew();
  if(!match){
    var generateNewWord = document.getElementById("generateNewWord");
    var newWord = document.createTextNode(" " + size);
    generateNewWord.appendChild(newWord); 
    wrongLetter++;
    var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + wrongLetter + ".png";
    wrongGuessesLeft --;
  }
  var check = true;
  for (var i = 0; i < newNew.length; i++){
    if(newNew[i] === "_ "){
      check = false;
    }
  }
  if(check){
    window.alert("You win!");
    wins ++;
    var results = document.getElementById("results");
    results.innerHTML= "<p>Wrong Letters Guessed: " + wrongLettersGuessed + "</p>"
                      "<p>wins: " + wins + "</p>"+
                      "<p>losses: " + losses + "</p>";
  }
 
  if(wrongLetter === 6){
    window.alert("Better luck next time!");
    losses ++;
    var results = document.getElementById("results");
                      "<p>wins: " + wins + "</p>"+
                      "<p>losses: " + losses + "</p>";
    // determineMatch();
  }
}
function init(){
  printNewNew();
}
window.onload = init;