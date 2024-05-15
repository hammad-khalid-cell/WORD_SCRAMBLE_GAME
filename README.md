Word Guessing Game

This is a simple word guessing game built with HTML, CSS, and JavaScript. Players are given a scrambled word and a hint. They have to unscramble the word within a limited time frame. If they succeed, they win; otherwise, they lose.

How to Play:

Scrambled Word: A word is presented to the player with its letters scrambled.
Hint: A hint is provided to give the player a clue about the word's meaning.
Timer: A timer counts down from 30 seconds. The player must unscramble the word before time runs out.
Input Field: Players enter their guess in the input field.
Check Button: Clicking the "Check" button verifies the player's guess.
Refresh Button: Clicking the "Refresh" button generates a new word and restarts the game.

Built-in Functions:

initTimer(maxTime)
Description: Initializes the timer with the specified maximum time.
Parameters:
maxTime: Maximum time in seconds.
Usage: initTimer(30)
initGame()
Description: Initializes the game by setting up a new word, its scrambled version, and a hint.
Usage: initGame()
checkWord()
Description: Checks the player's input against the correct word and displays an alert message accordingly.
Usage: checkWord()

Word Data:
The game includes an array of objects, each containing a word and its corresponding hint. This data is used to present a new word and hint to the player for each round.

MATH FUNCTIONS : 
The game utilizes several math functions to generate random numbers, shuffle arrays, and handle timers:

Math.random(): Generates a random floating-point number between 0 and 1.
Math.floor(): Rounds a number down to the nearest integer.
