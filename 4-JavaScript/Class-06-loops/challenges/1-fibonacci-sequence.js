function sequenceFibonacci(amount) {
    if (amount <= 0) return null;
    if (amount === 1) return 0;
    const arraysequence = [0, 1, 1]

    for (let i = 2; i <= amount; i++){
    arraysequence[i] = arraysequence[i - 1] + arraysequence[i - 2]
    }
    
    return arraysequence
}

const amount = 296
// console.log(sequenceFibonacci(amount));

document.write(sequenceFibonacci(amount));