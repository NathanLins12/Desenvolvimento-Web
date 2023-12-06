// Task 
setTimeout(() => {
    console.log(2);
}, 2000)

// Call Stack
console.log(1);

//microtask
queueMicrotask(() => {
    console.log(3);
})

// Microtask
Promise.resolve().then(() => {
    console.log(4);
})

// Call Stack
for (let index = 0; index < 10000; index++) {
    console.log(index);    
};