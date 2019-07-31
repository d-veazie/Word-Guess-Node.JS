let letter = require("./letter.js"); 

function Word(answer) {
    this.objArray = [];


    for (let i = 0; i< answer.length; i++) {
        let letter = new letter(answer[i]);
        this.objArray.push(letter);
    }

    this.log = function () {
        let answer = "";
        for (let i = 0; i < this.objArray.length; i++) {
            answer += this.objArray[i] + " "; 
        }
    }
    this.userGuess = function(input) {
        for (let i = 0; i < this.objArray.length; i++) {
            this.objArray[i].guess(input);
        }
    }
}

module.exports = Word; 