
var playerOne = {
  name: null,
  icon: null,
};

var playerTwo = {
  name: null,
  icon: null,
};

var gameBoard = {};

// players each enter names, game remembers player names
playerOne.name = prompt('What is your name?');
playerTwo.name = prompt('What is your name?');

document.getElementById('1name').textContent = playerOne.name;
document.getElementById('2name').textContent = playerTwo.name;

// player 1 assigned icon, game remembers that icon to represent player 1
// player 2 assigned different icon, game remembers that icon to represent player 2
var tardisSnippet = '<img src="tardis.png" height="100px">';

var dalekSnippet = '<img src="dalek.png" height="100px">';

// In order to take turns there are four things it needs to do:
// 1. Know whose turn it is
var whoseTurn;
whoseTurn = 1;

// 2. Be able to switch whose turn it is
function switchTurn(){
  if (whoseTurn == 1){
    whoseTurn = 2;
  } else if (whoseTurn == 2){
    whoseTurn = 1;
  }
};

// 3. Know to switch whose turn it is whenever someone clicks
// 4. Know to put the right icon in the right square when someone clicks
function setDivClickFunction(idToUse){
  var div = document.getElementById(idToUse);
  div.onclick = function() {
    if (gameBoard[idToUse] != 'played'){
      if (whoseTurn == 1){
        document.getElementById(idToUse).innerHTML = tardisSnippet;
      } else if (whoseTurn == 2){
        document.getElementById(idToUse).innerHTML = dalekSnippet;
      }
      switchTurn();
    }
    gameBoard[idToUse] = 'played';
    console.log(gameBoard);
  };
};

setDivClickFunction('div1');
setDivClickFunction('div2');
setDivClickFunction('div3');
setDivClickFunction('div4');
setDivClickFunction('div5');
setDivClickFunction('div6');
setDivClickFunction('div7');
setDivClickFunction('div8');
setDivClickFunction('div9');

// 5. Know to end game when 3 same icons form a row

// 6. Know to annouce game finished at end game

// 7. Know to annouce score and winner

// 8. Know to ask "play again?"
