const numbers = [1, 23, 44, 16]

console.log(numbers);

// spread

console.log(...numbers);
console.log(Math.max(...numbers));

//destructure 

const array = ["A", "B"];
const [item1, item2] = array
console.log(array);
console.log(item1);
console.log(item2);

// rest

function showArray(array, ...items) {
    console.log(array);
    console.log(items);
}

showArray(array, "x", "y", "z")