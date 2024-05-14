const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputText = document.querySelector(".input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");


let correctWord, timer;

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


let words = [
    {
        word: "addition",
        hint: "The process of adding numbers."
    },
    {
        word: "meeting",
        hint: "An event in which people come together."
    },
    {
        word: "number",
        hint: "A math symbol used for counting."
    },
    {
        word: "computer",
        hint: "An electronic device for processing data."
    },
    {
        word: "garden",
        hint: "A piece of land used for growing flowers and vegetables."
    },
    {
        word: "sunshine",
        hint: "The light and warmth that comes from the sun."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "ocean",
        hint: "A vast body of saltwater."
    },
    {
        word: "wonderful",
        hint: "Extremely good or impressive."
    },
    {
        word: "journey",
        hint: "A long trip or travel from one place to another."
    },
    {
        word: "victory",
        hint: "The act of winning or defeating an opponent."
    }, {
        word: "ramadan",
        hint: "The month of namaazi parhezgaar"
    }, {
        word: "abdullah",
        hint: "Jandu CR lekin J ki jaga G ayega"
    },{
        word: "Phone",
        hint: "One thing another then oxygen that you can't live without"
    },
    
 
];


const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputText.value = "";
    inputText.setAttribute("maxlength", correctWord.length);
};
initGame();
const checkWord = () => {
    let userWord = inputText.value.toLowerCase();
    if (!userWord)
        return alert("Please enter the word to check!");
    if (userWord != correctWord) {
       return alert(`Ooops ! ${userWord}  is not the correct word`);
    }
    else{
        alert(`Congratulations! ${correctWord.toUpperCase()} is the correct word `);
    initGame();
    }
};
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

