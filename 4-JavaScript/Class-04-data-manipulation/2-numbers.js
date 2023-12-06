let n1 = 2.529374;
let n2 = 8.2456245623;

console.log(n1); 2
console.log(parseInt(n1)); 
console.log(parseInt(n2)); 
console.log(parseFloat(n2)); 

console.log(String(n2).length);
console.log(String(n1.toFixed(2)).replace(".", ","));

console.log(8.2456245623.toFixed(2).replace(".", ","));

console.log(n2.toLocaleString("pt-BR", {
    style: "currency",
    currency: "brl"
}));

console.log(n1);
console.log(Math.abs(n1));

const numbers = [1, 2, 3, 3, 234, 235, 233, 90]

console.log(Math.max(2, 3, 90));
console.log(Math.max(...numbers));
console.log(Math.max(1, 2, 3, 3, 234, 235, 233, 90));

console.log(Math.min(2, 3, 90));
console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(2.4));
console.log(Math.round(2.5));
console.log(Math.floor(2.00000009));
console.log(Math.ceil(2.00000001));
console.log(Math.round(0.99) * 10);
console.log(Math.round(Math.random() * 10));
console.log(Math.round(Math.random() * 10));

console.log(Math.ceil(0));
while(Math.ceil(Math.random() !== 0.01)) {
    console.log("Rodando....");
}