// let count = 0
// while (count < 10) {
//     console.log(count);
//     count++
// }

// for(let count = 0; count < 10; count++)
// if(count >2 && count <8) {
//     // continue
//     break
//     // console.log(count);
// }

const myArray = ["a", 2, {}, () => {}] 
const arrayBiD = [
    ["a", "b", "c"],
    [1, 2, 3],
    [7, 8, 9 ],
] 
// console.log(arrayBiD[0][1]);

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

for(let i = 0; i < arrayBiD.length; i++){
    for (let j = 0; j < arrayBiD[i].length; j++) {
        for(let k = 0; k < arrayBiD[i][j].length; k++){

        }
        console.log(arrayBiD[i][j]);
    }
}

// for(const i of myArray){
//     console.log(i);
// }

// for( const i of arrayBiD){
//     for(const j of i){
//         console.log(i);
//     }
// }

for (const i in myArray) {
    // console.log(i);
    console.log(myArray[i]);
}