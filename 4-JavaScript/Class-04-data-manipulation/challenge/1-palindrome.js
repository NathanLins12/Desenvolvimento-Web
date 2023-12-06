// Crie uma função para verificar palíndromos
// A lógica deve receber string com palavra ou texto
// Use um ternário para imprimir "Verdadeiro" ou "Falso" na tela

function checkPalindrome(text) {
    let normalText = text;
    let reverseText = text.split("").reverse().join("")
    return normalText == reverseText
}

let text = "ovo"
const isPalindrome = checkPalindrome(text)

console.log(isPalindrome ? "verdadeiro" : "falso");