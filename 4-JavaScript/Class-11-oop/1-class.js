// paradigma
// métodos (funções)
// atributos (variáveis)
// entidades do mundo real
// this => (Scope) 
// class Brush {
//     constructor(color, height) {
//         this.colorName = color
//         this.height = height
//     }
//         action() {
//             console.log("escreve")
//     }
// }

// const blueBrush = new Brush("Azul", 10)
// const redBrush = new Brush("vermelho", 12)

// redBrush.action()

// console.log(blueBrush.colorName);
// console.log(redBrush.colorName);

// console.log(blueBrush.height);
// console.log(redBrush.height);



class Pokemon {
    constructor(name, level,) {
        this.name = name;
        this.level = level;
        this.health = 100

    }

    attack() {
        console.log(`${this.name} atacou!`);
    } 
    damage(effective, damage = 20) {
        if(effective) {
            this.health -= damage * 1.3;
            console.log(`${this.name} sofreu `);
        } else {
            this.health -= damage;
        }
    }

}

const charmander = new Pokemon("Charmander", 5)
const squirtle = new Pokemon("Squirtle", 4)
const bullbasaur = new Pokemon("Bullbasaur", 4)
console.log(charmander.name);
console.log(charmander.level);
console.log(squirtle.name);
console.log(squirtle.health);
squirtle.attack()


console.log(bullbasaur.name);
console.log(bullbasaur.health);

bullbasaur.damage();
console.log(bullbasaur.health);

const effective = true
bullbasaur.damage(effective);
console.log(bullbasaur.health);

bullbasaur.damage(effective);
console.log(bullbasaur.health);

bullbasaur.damage(effective);
console.log(bullbasaur.health);