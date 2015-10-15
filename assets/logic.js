var player_x = {
  name: null,
  icon: null,
};

var player_o = {
  name: null,
  icon: null,
};

var gameBoard = {};




// button saying 'Start',
// after player clicks 'Start', game will ask for player names.
$( "#assign" ).click(function() {
  // player 1 enter name, game remembers player name
  player_x.name = prompt('What is your name?', 'the Daleks');
  alert(player_x.name + ", you are the first player.  Your team is the Daleks!");
  // $('#status').text(player_x.name + ", you are the first player.  Your team is the Daleks!");
  // player 1 assigned icon, game remembers that icon to represent player 1
  document.getElementById('Xname').textContent = player_x.name;

  // player 2 enters name, game remembers player name
  player_o.name = prompt('What is your name?', 'the Doctor');
  alert(player_o.name + ", you are the second player.  Your team is the Doctor!");
  // $('#status').text(player_o.name + ", you are the second player.  Your team is the Doctor!");
  // player 2 assigned second icon, game remembers that icon to represent player 2
  document.getElementById('Oname').textContent = player_o.name;
});




// [0 1 2
//  3 4 5
//  6 7 8]

// check row 1 for values (true or false for 1, 2, 3)
// if there are any nulls, no winner on this row (do three times), move on
// if there are no nulls, check if all the values are the same. if not, move on to next row. if so, return something that indicates this row is a winner.
// return something that indicates there are no row winners at all

function checkRows() {
  if ((gameBoard[0] === gameBoard[1]) && (gameBoard[0] === gameBoard[2]) === true) {
    return gameBoard[0];
  } else if ((gameBoard[3] === gameBoard[4]) && (gameBoard[3] === gameBoard[5]) === true) {
    return gameBoard[3];
  } else if ((gameBoard[6] === gameBoard[7]) && (gameBoard[6] === gameBoard[8]) === true) {
    return gameBoard[6];
  }
};

function checkColumns() {
  if ((gameBoard[0] === gameBoard[3]) && (gameBoard[0] === gameBoard[6]) === true) {
    return gameBoard[0];
  } else if ((gameBoard[1] === gameBoard[4]) && (gameBoard[1] === gameBoard[7]) === true) {
    return gameBoard[1];
  } else if ((gameBoard[2] === gameBoard[5]) && (gameBoard[2] === gameBoard[8]) === true) {
    return gameBoard[2];
  }
};

function checkDiagonals() {
  if ((gameBoard[0] === gameBoard[4]) && (gameBoard[0] === gameBoard[8]) === true) {
    return gameBoard[0];
  } else if ((gameBoard[2] === gameBoard[4]) && (gameBoard[2] === gameBoard[6]) === true) {
    return gameBoard[2];
  }
};

function getWinner() {
  if (checkRows() != null) {
    return checkRows();
  } else if (checkColumns() != null) {
    return checkColumns();
  } else if (checkDiagonals() != null) {
    return checkDiagonals();
  } else if ( // if every square isn't equal to null then return Tie
    (gameBoard[0] != null) &&
    (gameBoard[1] != null) &&
    (gameBoard[2] != null) &&
    (gameBoard[3] != null) &&
    (gameBoard[4] != null) &&
    (gameBoard[5] != null) &&
    (gameBoard[6] != null) &&
    (gameBoard[7] != null) &&
    (gameBoard[8] != null) ) {
    if (window.confirm("It's a tie! Do you want to play again?")) {
      window.open("index.html", "Reset the board!");
    }
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

var dalekSnippet = '<img id=da src="assets/dalek.png" height="100px">';
var tardisSnippet = '<img id=ta src="assets/tardis.png" height="100px">';

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
