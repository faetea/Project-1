# Tic Tac Toe

Deployed App: http://faetea.github.io/Project-1/

<a href="https://raw.githubusercontent.com/faetea/Project-1/master/documentation/Mockup1.png">Wireframe Mockup</a>


### Need to do:

Build a dynamic game that allows two players to compete.

Prompt: https://github.com/ga-wdi-boston/js-project-ttt

### Timeline Checklist for Project #1

- Sketch wireframes for front-end appearance and behaviors            **done Tue, 6th**
- What kind of data front-end needs to store/manipulate to function?  **done Mon, 12th**
- Create repo for project, add README                                 **done Tue, 6th**
- Create front-end HTML and CSS (host on GitHub Pages)                **done Wed, 7th**
- Write out user stories for app                                      **done Mon, 12th**
- Write code to manage game logic                                     **done Mon, 12th**
- Write jQuery code to handle browser interaction                     **done Thurs, 15th**
- Link jQuery up w/ game’s Logic                                      **done Tues, 13th**
- Communicate w/ back-end.  Write AJAX code                           **done Thurs, 15th**
- Add AJAX to front-end app, link it to back-end appearance           **done Thurs, 15th**
- Add additional features to app.  Clean up documentation             **done Thurs, 15th**
- Test and debug                                                      **done Thurs, 15th**
- Present!                                                            **Fri, 16th**

### Data Objects/Nouns:

**player 1**
- name
- choice of icon

**player 2**
- name
- choice of icon

**game board**
- 9 squares & who moved in each square

### User Stories:
<a href="https://raw.githubusercontent.com/faetea/Project-1/master/documentation/Stories.txt">User stories</a>

> **Story 1**
> As a player, I can enter my name. (done)
>
> **Story 2**
> As the scoreboard, assign an icon. (done)
>
> **Story 3**
> As a player, I can click on game board squares to claim them.
>
> **Story 4**
> As the scoreboard, when there are 3 squares in a row the game is finished
>
> **Story 5**
> As the scoreboard, when game is finished, annouce scores and winner.
>
> **Story 6**
> As the game, when score is annouced, ask "Play Again?"

### Game Logic:

1. Game prompts "What is your name?",  Player 1 enters name (or placeholder name is used)
1. Game alerts "(player-name or placeholder), you are the first player.  Your team is the Daleks!"
1. For player 2, Game prompts "What is your name?",  Player 2 enters name (or placeholder name is used)
1. Game alerts "(player-name or placeholder), you are the second player.  Your team is the Doctor!"
1. Game assigns Dalek icon to Player 1,  and displays Player 1 name on the scoreboard
1. Game assigns Tardis icon to Player 2,  and displays Player 2 name on the scoreboard
1. Player 1 clicks square,  Game checks if there is already a piece in that square, if empty, places player 1 icon in square
1. Game uses 'var = whoseTurn' and 'function switchTurn()' to keep track of whose turn it is
1. Player 2 takes turn,  Game checks if there is already a piece in that square, if empty, places player 2 icon in square
1. Repeat
1. Game uses 'function getWinner()' to know when win state has been reached (three of same icons form a row)
1. Once win state is reacted Game knows to set 'whoseTurn = 3' so that neither players icons can be placed anymore
1. Game alerts "Game Over! (winner-name) has won!",  Confirms "Do you want to play again?",  Re-opens 'index.html'
