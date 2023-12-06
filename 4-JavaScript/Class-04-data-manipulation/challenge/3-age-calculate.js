// Crie um programa que pergunte em que data o usuário nasceu
// Depois escreva na tela quantos anos ele tem

const dateWasBorn = new Date(prompt("Digite a sua data de nascimento (yyyy-mm-dd):"))

const dateNow = new Date();
const userAge = Math.floor((dateNow - dateWasBorn) / 1000 / 60 / 60 /24 / 365.25); 
console.log(userAge);