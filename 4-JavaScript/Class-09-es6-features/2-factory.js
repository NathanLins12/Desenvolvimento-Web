// Factory (Creational Design Pattern)

function person(name, age) {
    return{
        name,
        userAge: age,
        canDrive: age >= 18,
        status: () => {
            if (age > 18) {
            return "pode dirigir";
        } else {
            return "não pode dirigir"
        }
    }
}
}

console.log(person("nathan", 17).status());
// console.log(typeof person("nathan", 17));
console.log(person("Daniel", 16).status());
console.log(person("Emanuel", 30).status());