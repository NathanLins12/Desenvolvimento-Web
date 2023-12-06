// Solicite 2 números e apresente:
// As operaçôes e os resultados escrevendo no documento (função write).
// Crie constantes e atribua as operações de:
// +, -, *, /, %, ** e raiz para os números solicitados.

const number1 = Number(prompt("Digite o primeiro número para calcular: "))
const number2 = Number(prompt("Agora digite o segundo número: "))

alert(`Os números são ${number1} e ${number2}!`)

const add = number1 + number2
const sub = number1 - number2
const mul = number1 * number2
const div = number1 / number2
const rem = number1 % number2
const exp = number1 ** number2
const sqr = number2 **  (1 / number1)


document.write (`<strong>A soma de ${number1} + ${number2} é de: ${add}</strong> <br>`);
document.write (`<strong>A subtração de ${number1} - ${number2} é de: ${sub}</strong> <br>`);
document.write (`<strong>A multiplicação de ${number1} * ${number2} é de: ${mul}</strong> <br>`);
document.write (`<strong>A divisão de ${number1} / ${number2} é de: ${div.toFixed(3)}</strong> <br>`);
document.write (`<strong>O resto da divisão de ${number1} % ${number2} é de: ${rem}</strong> <br>`);
document.write (`<strong>A potência de ${number1} ^ ${number2} é de: ${exp}</strong> <br>`);
document.write (`<strong>A raiz ${number1} de ${number2} é de: ${sqr.toFixed(3)}</strong> <br>`);