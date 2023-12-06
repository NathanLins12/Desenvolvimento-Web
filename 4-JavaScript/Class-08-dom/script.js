const myTitle = document.querySelector("h1");
const myContainer = document.querySelector(".container");

console.log(myTitle);
console.log(myTitle.textContent);
console.log(myTitle.innerHTML);

console.log(myContainer);
console.log(myContainer.textContent);
console.log(myContainer.innerHTML);

myTitle.innerText = "Document Object Model";
myTitle.innerHTML = "<i>Nathan</i>";
myTitle.innerHTML = "<i>HTML</i>";

myTitle.style.color = "orange";
myTitle.style.backgroundColor = "lightgray";

// const boxesNodeList = document.getElementsByClassName(".box"); // HTMLCollection
// console.log(boxesNodeList);

const boxesNodeList = document.querySelectorAll(".box"); // NodeList
// console.log(boxesNodeList.forEach((value) => 
// console.log(value)));
console.log(boxesNodeList.forEach((node) => {node.style.color = "blue";
}));


const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const sumButton = document.querySelector(".sumButton")
const result = document.querySelector(".result")

function sumNumber() {
    result.innerHTML = Number(num1.value) + Number(num2.value);
}

sumButton.addEventListener("click", sumNumber)

num1.addEventListener("keyup", () => {
    console.log(num1.value);
})

num2.addEventListener("keyup", () => {
    console.log(num2.value);
})