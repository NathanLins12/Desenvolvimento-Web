function convertAverageToABC (average) {
if (typeof average === "string") {
    average = Number(average.replace(",", "."));
}

    console.log((average));
    if (average >= 90 && average <= 100) {
        return "A";
    } else if (average >= 80 && average <= 90){
     return "B";
    } else if (average >= 70 && average <= 80){
     return "C";
    } else if (average >= 60 && average <= 70){
    return "D";
    } else if (average >= 0 && average <= 60){
    return "F";
    } else {
        return "Média inválida"
    }
}

const averageStudent = 86
const averageStudentABC =
console.log(convertAverageToABC(averageStudent));

// console.log(180 / 180 * 100);

switch (averageStudentABC) {
    case "A":
        console.log("Exelente, aprovado com A!");
        break;
    case "B":
        console.log("Muito bem, aprovado com B!");
        break;
    case "C":
        console.log("boa! Foi aprovado com C");
        break;
    case "D":
        console.log("Estude um pouco mais, você foi eprovado com D!");
        break;
    case "F":
        console.log("Ja sabia, reprovado com F! Estude mais!");
        break;

    default:
        console.log("Nota ABC inválida");
        break;
}