// Construa uma lógica para dizer se um número é par ou é ímpar
// Receba o número desejado do usuário via prompt
// Escreve na tela o número e se ele é par ou é ímpar

const numUser = prompt("Digite algum número para ver se ele é par ou impar: ")
const result = numUser % 2 == 0 ? "par" : "impar"
alert(`O número ${numUser} é ${result}`);