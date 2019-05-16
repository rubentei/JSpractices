//RETO DADO

//CLASS

class Dice {

    //constructor

    constructor  (n_faces){
        this.n_faces = n_faces;
    }

    //getter
    get get_greater_half_poss(){
        return this.greater_half_poss();
    }

    get get_even_poss(){
        return this.even_poss();
    }

    get get_multiple3_poss(){
        return this.multiple3_poss();
    }

    get get_winner_dice(){
        return this.winner_dice();
    }

    get get_draw_probability(){
        return this.draw_probability();
    }

    //methods

    //static method1 obtain winner

    static winner_dice(dice1, dice2){
        
        let result1 = Math.floor((Math.random()* (dice1.n_faces - 1) + 1));
        let result2 = Math.floor((Math.random()* (dice2.n_faces - 1) + 1));
    
        console.log(result1);
        console.log(result2);

        if(result1 === result2 ){
            return console.log(`Ha habido un empate, los resultados son ${result1} y ${result2}`);
        }else if(result1 > result2){
            return console.log(`El ganador es el Dado1, los resultados son ${result1} y ${result2}`);
        }else{
            return console.log(`El ganador es el Dado2, los resultados son ${result1} y ${result2}`);
        }
    }

    //static method2  draw probability

    static draw_probability(dice1, dice2){
        let faces1 = dice1.n_faces;
        let faces2 = dice2.n_faces;
        let lower = 0;

        if(faces1 < faces2){
            lower = faces1;
        }else{
            lower = faces2;
        }

        return (lower / (faces1 * faces2)) * 100;
    }

    //method 1 probability >1/2  # of faces
    greater_half_poss(n_faces){
        let valid_cases = (this.n_faces/2);
        let greaterHalf = (valid_cases/this.n_faces) * 100;
        return greaterHalf;  
    }

    //method 2 probability even #
    even_poss(n_faces){
        var is_even = 0;
        for(var i = 0; i < this.n_faces; i++){
            if([i+1]%2 == 0){
                is_even++;
            }
        }
        let total_even = (is_even/this.n_faces) * 100;
    
        return total_even;
    }

    //method3 probability multiple of 3
    multiple3_poss(n_faces){
        var is_multiple = 0;
        for(var i = 1; i < this.n_faces; i++){
            if([i]%3 == 0){
                is_multiple++;
                console.log(is_multiple);
            }
        }

        let total_multiple = (is_multiple/this.n_faces) * 100;
    
        return total_multiple;
    }
}

var dado1 = new Dice(20);
var dado2 = new Dice(20);

dado1.greater_half_poss;