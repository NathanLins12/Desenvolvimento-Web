const arrayNumbers = [1, 7, 7, 8, "7", 2, 4, 6, 40];

// const arraySorted = arrayNumbers.sort((a, b) => {
//     if (2 > 1) return 1
//     if (2 < 1) return -1
//  return 0
// });

const arraySorted = arrayNumbers.sort((a, b) => b - a)

console.log(arrayNumbers.join("-"));
console.log(arraySorted.join("-"));


const arrayNames = ["Nathan", "Pedro", "Daniel", "Edu", "Luiza", "Éric"]

// arrayNames.sort((a, b) => {
//     a = a.toUpperCase()
//     b = b.toUpperCase()
//     if (a > b) return 1
//     if (a < b) return -1
//  return 0
// })

arrayNames.sort((a, b) => a.localeCompare(b))

console.log(arrayNames);

const arrayAnimes = [
{ name: "Cavalheiros dos Zodíaco", year: 1986},
{name: "Naruto", year: 1997},
{name: "Dragon Ball", year: 1984},
{name: "Digimon", year: 1997},
{name: "Jaspion", year: 1985}
]

// const sortedArrayAnimes = arrayAnimes.sort((a, b) => {
//     if (a.year > b.year) return 1
//     if (a.year < b.year) return -1
//     return 0
// });

// console.table(sortedArrayAnimes.sort((a, b) => a.year - b.year));

const sortedArrayAnimes = arrayAnimes.sort((a, b) => {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
});

// console.table(sortedArrayAnimes);
console.table(sortedArrayAnimes);