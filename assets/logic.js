var player_x = {
  name: null,
  icon: null,
};

var player_o = {
  name: null,
  icon: null,
};

var gameBoard = {};


// player 1 enter name, game remembers player name
player_x.name = window.prompt('What is your name?', 'the Daleks');
$('#status').text(player_x.name + ", you are the first player.  Your team is the Daleks!");
// player 1 assigned icon, game remembers that icon to represent player 1
document.getElementById('Xname').textContent = player_x.name;


// player 2 enters name, game remembers player name
player_o.name = window.prompt('What is your name?', 'the Doctor');
$('#status').text(player_o.name + ", you are the second player.  Your team is the Doctor!");
// player 2 assigned second icon, game remembers that icon to represent player 2
document.getElementById('Oname').textContent = player_o.name;


function getWinner() {
  if (
    (gameBoard['div1'] === 'dalek' && gameBoard['div2'] === 'dalek' && gameBoard['div3'] === 'dalek') ||
    (gameBoard['div4'] === 'dalek' && gameBoard['div5'] === 'dalek' && gameBoard['div6'] === 'dalek') ||
    (gameBoard['div7'] === 'dalek' && gameBoard['div8'] === 'dalek' && gameBoard['div9'] === 'dalek') ||
    (gameBoard['div1'] === 'dalek' && gameBoard['div4'] === 'dalek' && gameBoard['div7'] === 'dalek') ||
    (gameBoard['div2'] === 'dalek' && gameBoard['div5'] === 'dalek' && gameBoard['div8'] === 'dalek') ||
    (gameBoard['div3'] === 'dalek' && gameBoard['div6'] === 'dalek' && gameBoard['div9'] === 'dalek') ||
    (gameBoard['div1'] === 'dalek' && gameBoard['div5'] === 'dalek' && gameBoard['div9'] === 'dalek') ||
    (gameBoard['div3'] === 'dalek' && gameBoard['div5'] === 'dalek' && gameBoard['div7'] === 'dalek') ) {
    return player_x.name;
  } else if (
    (gameBoard['div1'] === 'tardis' && gameBoard['div2'] === 'tardis' && gameBoard['div3'] === 'tardis') ||
    (gameBoard['div4'] === 'tardis' && gameBoard['div5'] === 'tardis' && gameBoard['div6'] === 'tardis') ||
    (gameBoard['div7'] === 'tardis' && gameBoard['div8'] === 'tardis' && gameBoard['div9'] === 'tardis') ||
    (gameBoard['div1'] === 'tardis' && gameBoard['div4'] === 'tardis' && gameBoard['div7'] === 'tardis') ||
    (gameBoard['div2'] === 'tardis' && gameBoard['div5'] === 'tardis' && gameBoard['div8'] === 'tardis') ||
    (gameBoard['div3'] === 'tardis' && gameBoard['div6'] === 'tardis' && gameBoard['div9'] === 'tardis') ||
    (gameBoard['div1'] === 'tardis' && gameBoard['div5'] === 'tardis' && gameBoard['div9'] === 'tardis') ||
    (gameBoard['div3'] === 'tardis' && gameBoard['div5'] === 'tardis' && gameBoard['div7'] === 'tardis') ) {
    return player_o.name;
  } else {
    return null;
  }
};


var whoseTurn;
whoseTurn = 1;

function switchTurn(){
  if (whoseTurn === 1){
    whoseTurn = 2;
  } else if (whoseTurn === 2){
    whoseTurn = 1;
  }
};


var dalekSnippet = '<img src="assets/dalek.png" height="100px">';
var tardisSnippet = '<img src="assets/tardis.png" height="100px">';


// To take turns, need to:
// 1. Know whose turn it is
// 2. Be able to switch whose turn it is
// 3. Know to switch whose turn it is whenever someone clicks
// 4. Know to put the right icon in the right square when someone clicks
// 5. Know to end game when 3 same icons form a row
// 6. Know to annouce game finished at end game
// 7. Know to annouce winner
// 8. Know to ask "play again?"


$( ".square" ).click(function() {
  var idToUse = $(this).attr('id');
    if (gameBoard[idToUse] !== 'dalek' && gameBoard[idToUse] !== 'tardis') {
      if (whoseTurn === 1) {
        // $('#' + idToUse).
        document.getElementById(idToUse).innerHTML = dalekSnippet;
        gameBoard[idToUse] = 'dalek';
      }
      if (whoseTurn === 2) {
        document.getElementById(idToUse).innerHTML = tardisSnippet;
        gameBoard[idToUse] = 'tardis';
      }


      var winner = getWinner();
      if (winner) {
        whoseTurn = 3;
        window.alert("Game Over! " + winner + " has won!");
        if (window.confirm("Do you want to play again?")) {
          window.open("index.html", "Reset the board!");
        }
      } else {
        switchTurn();
      }


    }
    console.log(gameBoard);
});
