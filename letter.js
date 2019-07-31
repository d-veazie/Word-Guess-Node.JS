function letter(value) {
    this.letter = value;
    this.guessed = false; 

    this.toString = function() {
        if (this.letter === " ") {
            this.guessed=tue;
             return " "; 
        } 
        else {
            if (this.guess === false) {
                return "_";
            }
            else {
                return this.letter; 
            }
        }
    }
};