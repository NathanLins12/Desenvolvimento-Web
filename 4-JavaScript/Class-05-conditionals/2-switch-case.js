const weekDay = new Date().getDay() + 1 // 1-7
// const weekDay = 5

console.log(weekDay);

switch (weekDay) {
        case 0: 
        console.log("domingo");
        break
        case 1:
        console.log("segunda");
        break
        case 2:
        console.log("terça");
        break
        case 3:
        console.log("quarta");
        break
        case 4:
        console.log("quinta");
        break
        case 5:
        console.log("sexta");
        break
        case 6:
        console.log("sábado");
        break
        default: 
        console.log("dia não encontrado! ");
}

const option = prompt(`
digite a opção desejada

1- consulta
2- atendimento
3- encerrar

`);

switch (option) {
    case "1":
       alert("vamos agendar a sua consulta");
        break;
    case "2":
       alert("vamos te transferir para um de nossos artendentes");
        break;
    case "3":
       alert("obrigado, volte sempre");
        break;
    default:
        alert("opção invalida")
        break;
}