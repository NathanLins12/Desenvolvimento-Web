const arrayNumbers = Array.from({length: 60} , (value, index) => index + 1 )
.sort(() => Math.random() - 0.5)
.filter((value, index) => index < 6)
.sort((a, b) => a - b);

console.log(arrayNumbers.join("-"));