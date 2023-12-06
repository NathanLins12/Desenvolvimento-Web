// Crie um programa para cadastrar Jogo que irá solicitar ao usuário o nome, o gênero e o ano de lançamento do mesmo. Em seguida, monte um OBJECT contendo essas informações e por meio dele e imprima as características do jogo usando a função log.


const gameName = prompt("Digite o nome do jogo: ");
const gameGenre = prompt("Digite o gênero do jogo: ");
const gameReleaseYear = prompt("Digite o ano de lançamento do jogo: ");

const game = {
    name: gameName,
    genre: gameGenre,
    gameReleaseYear: gameReleaseYear,
};

console.log(`Nome do jogo: ${gameName}`);
console.log(`Gênero do jogo: ${gameGenre}`);
console.log(`Ano de lançamento do jogo: ${gameReleaseYear}`);