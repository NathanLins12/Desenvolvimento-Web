const userAge = 17

if (userAge > 16) {
    if (userAge)
    console.log("pode votar");
    
    if (userAge >= 18 && userAge <= 70) {
        console.log("voto obrigatório");
    }   else {
        console.log("voto facultivo");
    }
} else {
    console.log("não pode votar");
}
    