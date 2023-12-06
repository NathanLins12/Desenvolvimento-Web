// Crie uma função para converter velocidade de m/s para km/h
// Solicite a velocidade ao usuário via prompt
// Escreva (write) na tela o resultado

function convertMsToKmh(speed) {
return (speed * 3.6) + "km/h"
}

const userSpeed = prompt("digite um número qualquer para saber qual será a velocidade em km/h")
const convertSpeed = convertMsToKmh(userSpeed)
document.write(convertMsToKmh(userSpeed) + "")
