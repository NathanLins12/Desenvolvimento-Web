function studentAverage (g1, g2) {
    return (g1 + g2) / 2
}

const average = studentAverage(2, 7)
console.log(average);

if (average >= 7) {
    console.log("aprovado");
} else if (average >= 4){
    console.log("recuperação");
} else {
    console.log("reprovado");
}