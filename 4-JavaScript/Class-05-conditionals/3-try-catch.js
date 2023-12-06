function runApplication() {
    return "Running...";
}

try {
console.log(runApplication());
} catch (Error) {  // hoisting
    console.error(Error);
} finally {
    console.log("sempre será executado!");
}

document.write("application is live...")

function divideNumbers(n1, n2){
    if (n2 == 0) throw new Error("Não é possível dividir por 0!!!!")
    return n1 / n2
}
console.log(divideNumbers(6, 0));