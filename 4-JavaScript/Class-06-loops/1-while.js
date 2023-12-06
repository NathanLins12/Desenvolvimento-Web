let count = 0; //flag
while (count <= 200000) {
    if (count % 1000 === 0){
        console.log(count);
        // count++
        // continue
        // break;
    }
    // console.log(count);
    count++ //container
}

// let noia = 0
// while (noia <=500) {
//     console.log(noia);
//     noia = count * 2 
//     count++
// }

while(true) {
    let resp = prompt("deseja encerrar?")
    
    if (!resp) {
        alert("Obrigado pela visita!")
        break
    }

}