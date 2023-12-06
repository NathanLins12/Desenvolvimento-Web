function degreeConvert(degree) {
    console.log(degree);
    const degreeAux = degree.split(" ").join("");
    const arrayDegree = Array.from(degreeAux)
    const scaleDegree = arrayDegree.pop().toUpperCase();
    const newDegree = Number(arrayDegree.join(""))

    if (isNaN(newDegree)) throw new Error("Valor inválido")
    
    function convertToFarenheit() {
        return (newDegree * 9) /5 + 32
    }
    function convertToCelcius() {
    return ((newDegree - 32) * 5) / 9 
    }

    switch (scaleDegree) {
        case "C":
            return convertToFarenheit() + "F"
            case "F":
                return convertToCelcius() + "C"
                
        default:
            throw new Error("Escala não identificada!");
            break;
    }

    console.log(degree);
    console.log(degreeAux);
    console.log(arrayDegree);
    console.log(scaleDegree);
    console.log(newDegree);
    return "test"
}

try {
const temperature = prompt("Digite uma temperatura: ");
const temperatureConverted = degreeConvert(temperature);
alert(`${temperature} = ${temperatureConverted}`);
} catch (error) {
    console.error() ;
}
