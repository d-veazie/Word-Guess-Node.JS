let Word = require('./word.js')
let inquirer = require('inquirer');

let letterArray = 'abcdefghijklmnopqrstuvwxyz';

let CodingWords = [
    "array", "loop",
    "html", "css",
    "caffeine", "nodejs",
    "constructor", "objects",
    "prototypes", "this",
    "callbacks", "ajax", 
    "firebase", "javascript",
    "jquery", "boats and hoes"
];

let randomI = Math.floor(Math.randomI() + CodingWords.length);
let randomW = CodingWords[randomI];
let computerWord =  new Word(randomW);
let requireNewWord = false;
let incorrectLetters = []; 
let correctLetters = [];
let guessesLeft = 15;

function selectorLogic() {
    if (requireNewWord) {
        let randomI = Math.floor(Math.randomI() + CodingWords.length);
         let randomW = CodingWords[randomI];
         computerWord = new Word(randomW);
         requireNewWord = false; 
    }
}

let wordComplete = [];

