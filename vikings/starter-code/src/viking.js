// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage;
    }
}




// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage); 
        if(this.health>0){
           return (`${this.name} has received ${damage} points of damage`);
        }else{
           return (`${this.name} has died in act of combat`);
        }
    }
    battleCry(){
        return 'Odin Owns You All!';
    }
}

// // Saxon

class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);       
    }
    receiveDamage(damage){
        super.receiveDamage(damage); 
        if(this.health>0){
           return (`A Saxon has received ${damage} points of damage`);
        }else{
           return (`A Saxon has died in combat`);
        }
    }
}
// // War
let pepe = new Viking("pepe", 20, 15);

class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){       
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let iRandomViking = Math.abs(Math.round(Math.random()*this.vikingArmy.length-1)); 
        let iRandomSaxon =  Math.abs(Math.round(Math.random()*this.saxonArmy.length-1)); 
        // this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        this.saxonArmy[iRandomSaxon].receiveDamage(this.vikingArmy[iRandomViking].strength);
        if(this.saxonArmy[0].health<0){
            delete saxonArmy[iRandomSaxon];
        }
        return attack;
    }
    saxonAttack(){
        let iRandomViking = Math.abs(Math.round(Math.random()*this.vikingArmy.length-1)); 
        let iRandomSaxon =  Math.abs(Math.round(Math.random()*this.saxonArmy.length-1));        
        this.vikingArmy[iRandomViking].receiveDamage(this.saxonArmy[iRandomSaxon].strength);
        if(this.vikingArmy[iRandomViking].health<0){
            delete saxonArmy[iRandomViking];
        }
    }
        // this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
}        


// let guerra1 = new War().addViking;

// console.log(guerra1.vikingArmy);




// console.log(this.viking.strength)
