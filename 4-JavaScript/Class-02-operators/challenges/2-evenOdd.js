const nUser = Number(prompt("digite um númeroe veja se ele é par ou impar:"))
const result = nUser % 2 === 0 ? "par" : "ímpar"
alert(`O número ${nUser} é ${result}!`)