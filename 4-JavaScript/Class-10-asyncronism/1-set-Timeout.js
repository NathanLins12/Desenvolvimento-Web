console.log("antes");

const timeOut = setTimeout(() => {
    console.log("setTimeout");
    
}, 1000);
console.log("depois");

let count = 0;
const setTimer = setInterval(() => {
    console.log(`setInterval ${count}`);
    count++;

    if (count === 10) {
        clearInterval(setTimer)
    }
},3000)

console.log(setTimer);
