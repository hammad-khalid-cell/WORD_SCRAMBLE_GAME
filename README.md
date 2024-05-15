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

================================WORKING===============================
1.....

const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputText = document.querySelector(".input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");

These lines define variables by selecting elements from the HTML document. Each variable represents an element in the game:
wordText: Element displaying the scrambled word.
hintText: Element displaying the hint.
timeText: Element displaying the timer.
inputText: Input field where the player enters their guess.
refreshBtn: Button for refreshing the game.
checkBtn: Button for checking the player's guess.

2......

let correctWord, timer;

Declares variables correctWord and timer to be used later in the code.

3......

const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return (timeText.innerHTML = maxTime);
        }
        else {
            alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
            initGame();
        }
    }, 1000);
};

Defines a function initTimer that initializes and starts the timer countdown. It takes maxTime as a parameter, representing the maximum time in seconds.
until the time is greater than zero seconds the loop will continue to iterate down ,when it becomes zero it will display an alert message on the screen showing that your 
time is off.

4......

let words = [
    
];
Defines an array of objects containing words and hints for the game.

5.....

const initGame = () => {
    initTimer(30); // Starts the timer with 30 seconds
    let randomObj = words[Math.floor(Math.random() * words.length)]; // Selects a random word from the array
    let wordArray = randomObj.word.split(""); // Splits the word into an array of characters
    for (let i = wordArray.length - 1; i > 0; i--) { // Shuffles the characters of the word
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); // Displays the shuffled word
    hintText.innerText = randomObj.hint; // Displays the hint
    correctWord = randomObj.word.toLowerCase(); // Stores the correct word in lowercase
    inputText.value = ""; // Clears the input field
    inputText.setAttribute("maxlength", correctWord.length); // Sets the maximum length for the input field
};
initGame(); // Initializes the game when the script is executed


Defines a function initGame that initializes the game state:
Starts the timer with 30 seconds.
Selects a random word from the words array.
Shuffles the characters of the word.
Displays the shuffled word and its hint.
Stores the correct word in lowercase.
Clears the input field and sets its maximum length.

6.....

const checkWord = () => {
    let userWord = inputText.value.toLowerCase(); // Retrieves the user's guess and converts it to lowercase
    if (!userWord)
        return alert("Please enter the word to check!"); // Displays an alert if the input field is empty
    if (userWord != correctWord) {
        return alert(`Oops! ${userWord} is not the correct word`); // Displays an alert if the guess is incorrect
    } else {
        alert(`Congratulations! ${correctWord.toUpperCase()} is the correct word `); // Displays an alert if the guess is correct
        initGame(); // Restarts the game
    }
};

checkWord is a function that checks the player's input against the correct word.
It first retrieves the value of the input field, which contains the player's guess, and converts it to lowercase using toLowerCase() method. This ensures that the comparison is case-insensitive.
It then checks if the input field is empty. If it is, it displays an alert asking the player to enter a word.
If the input field is not empty, it compares the user's guess (userWord) with the correct word (correctWord). If they are not the same, it displays an alert informing the player that their guess is incorrect.
If the user's guess matches the correct word, it displays an alert congratulating the player and showing the correct word in uppercase (correctWord.toUpperCase()).
After displaying the alert, it calls the initGame function to restart the game

7.....

refreshBtn.addEventListener("click", initGame); // Event listener for the refresh button, initializes the game when clicked
checkBtn.addEventListener("click", checkWord); // Event listener for the check button, checks the word when clicked


These lines add event listeners to the refresh and check buttons.
When the refresh button is clicked (refreshBtn.addEventListener), it calls the initGame function, effectively starting a new game.
When the check button is clicked (checkBtn.addEventListener), it calls the checkWord function to check the player's guess against the correct word












