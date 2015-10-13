# Tic Tac Toe

https://github.com/ga-wdi-boston/js-project-ttt



### Need to do:

Build a dynamic game that allows two players to compete.



### Timeline Checklist for Project #1

- Sketch wireframes for front-end appearance and behaviors **done Tue, 6th**
- What kind of data front-end needs to store/manipulate to function? **Mon, 12th**
- Create repo for project, add README **done Tue, 6th**
- Create front-end HTML and CSS (host on GitHub Pages) **done Wed, 7th**
- Write out user stories for app **Mon, 12th**
- Write code to manage game logic **Mon, 12th**
- Write jQuery code to handle browser interaction
- Link jQuery up w/ game’s logic
- Communicate w/ back-end.  Write AJAX code
- Add AJAX to front-end app, link it to back-end app
- Add additional features to app.  Clean up documentation
- Test and debug
- Present! **Fri, 16th**



### Data Objects/Nouns:

player 1
- name
- choice of icon
player 2
- name
- choice of icon
game board
- 9 squares & who moved in each square



### User Stories:

**Story 1**
As a player, I can enter my name. (done)

**Story 2**
As the scoreboard, assign an icon. (done)

**Story 3**
As a player, I can click on game board squares to claim them.

**Story 4**
As the scoreboard, when there are 3 squares in a row the game is finished

**Story 5**
As the scoreboard, when game is finished, annouce scores and winner.

**Story 6**
As the game, when score is annouced, ask "Play Again?"



### Game Logic:

players each enter names, game remembers player names
player 1 chooses icon, game remembers that icon to represent player 1
player 2 chooses different icon, game remembers that icon to represent player 2
player 1 clicks square, game places P1 icon in square
player 2 clicks square, game places P2 icon in square
players continue
as soon as either player has 3 icons in a row, game annouces game finished!
game annouces score and winner
game asks "play again?"
