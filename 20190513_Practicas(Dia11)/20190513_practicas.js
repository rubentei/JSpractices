//GAME

//classes: DICE, HERO, GAME


//Dice

class Dice {
    constructor(n_faces) {
        this.n_faces = n_faces;
    }

    get get_throw_dice() {
        return this.throw_dice();
    }

    throw_dice() {
        return Math.floor(Math.random() * (this.n_faces - 1) + 1);
    }
}

//Hero

class Hero {
    constructor(name, health_points, attack, defence, hability) {
        this.name = name;
        this.health_points = health_points;
        this.attack = attack;
        this.defence = defence;
        this.hability = hability;
    }

    get get_health_points() {
        return this.health_points;
    }

    set set_health_points(new_hp) {
        this.health_points = this.health_points - new_hp;
    }

    hero_attack() {
        return (this.attack + this.hability) * dice1.get_throw_dice;
    }

    hero_defence() {
        return (this.defence + this.hability) * dice1.get_throw_dice;
    }
}


//Game

class Game {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
    }

   fight() {

        while (this.hero1.get_health_points >= 0 && this.hero2.get_health_points >= 0) {

            this.hero1.set_health_points = this.hero2.hero_attack() - this.hero1.hero_defence();
            this.hero2.set_health_points = this.hero1.hero_attack() - this.hero2.hero_defence();

            console.log(this.hero1.get_health_points);
            console.log(this.hero2.get_health_points);
        }

        let healt1 = this.hero1.get_health_points;
        let healt2 = this.hero2.get_health_points;

        if (healt1 > healt2) {
            console.log(`${this.hero1.name} ha ganado la batalla`);
        } else {
            console.log(`${this.hero2.name} ha ganado la batalla`);
        }
    }
}

var dice1 = new Dice(16);

var spiderman = new Hero("Spider Man", 2330, 25, 15, 30);
var wolverine = new Hero("Lobezno", 2420, 30, 10, 20);


var spiderman_vs_wolverine = new Game(spiderman, wolverine);

spiderman_vs_wolverine.fight();