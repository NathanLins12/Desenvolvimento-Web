// Crie uma função que remova um elemento específico de um Array
// Insira o nome do elemento e o array via parâmetros
// Retorne o array com valor atualizado

function deleteElementArray(element, array) {
    const index = array.indexOf(element)
    array.splice(index, 1)
    return index;
}

const techs = ["html", 10, "css", 20, "javaScript", 30]

console.log(techs.splice(1, 3));
console.log(techs);

console.log(deleteElementArray(30, techs));