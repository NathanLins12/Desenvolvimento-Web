// Binary

let num1 = 2
let num2 = 3

console.log(num1 + num2);
console.log("text" + num2);
console.log(2 + 3);

//Unary

console.log(++num1);
console.log(num1);
console.log(num1++);
console.log(typeof num1);

// ternary
console.log(3 != 4 ? "verdadeiro" : "falso");


console.log(num1) = 4;
console.log(4 != 4 ? "AAA" : "BBB");

const average = 5
console.log(average >= 7 ? "Aprovado" : "Reprovado");

// Truthy               Falsy
// 1, 1.5, -1           0
// " ", "0", "false"    ""
// {}                   null
// []                   undefined
// Infinity, -Infinity  NaN

console.log(-1 ? "true" : "false");
console.log( "" ? "true" : "false");
console.log( "0" ? "true" : "false");
console.log( {} ? "true" : "false");
console.log( undefined ? "true" : "false");
console.log(-Infinity ? "true" : "false");