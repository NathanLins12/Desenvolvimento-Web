// function calculateFactor(number) {
//     let aux = 1
//     for( let i = number; i > 0; i--){
//         // console.log(i);
//         aux *= i 
//     } return aux
// }

// const number = 10

// console.log(calculateFactor(number));



function calculateFactor(number) {
    let result = 1
    for(let i = number; i > 0; i--){
    result *= i
    } return result
}
 const number = 171
 console.log(calculateFactor(number));