//Object

let nameStudent = "Nathan";
let age = 17;
let profission = "Student web developer";

console.log(profission);

let student = {
    name: "Nathan", 
    age: 30, 
    profission: "web  developer",
    attack: () => "pound",
    special: () => "hydropump"
};


// console.log(pokemon);
// console.log(typeof pokemon);
// console.log(pokemon.name);
// console.log(pokemon.level);
// console.log(pokemon["type"]);
// console.log(pokemon.attack());
// console.log(pokemon.special());

//Array (Vector)

// let pokedex = ["Charmander", "Bulbasaur", "Squirtle"]

let pokedex = [
    { name: "Charmander", level: 6},
    { name: "Bulbasaur", level: 5},
    { name: "Squirtle", level: 4},
];

console.log(pokedex);
console.log(typeof pokedex);
console.log(pokedex[0]);
console.log(pokedex[1]);
console.log(pokedex[2][0]);
console.log(pokedex[0].name);
console.log(pokedex[0].level);
