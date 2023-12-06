const randomNumber =  Math.ceil(Math.random() * 20);
let countTry = 1

while (true) {
    const guessNumberUser = prompt("Adivinhe um número de 1 a 10.");
    console.log(guessNumberUser);

    if (guessNumberUser === null) {
        alert("Programa encerrado")
        break
    }

    if (guessNumberUser < 1 || guessNumberUser > 10)
    alert("")

    if (guessNumberUser === "" || isNaN(guessNumberUser)) {
        alert("insira um número de 1 a 10")
        continue
    }
    
    const gameOver = Number(guessNumberUser) === randomNumber;
    if (gameOver) {
        alert(`Parabéns você acertou em ${countTry} tentativa(s)!`)
        break;
    }
    countTry ++;
}