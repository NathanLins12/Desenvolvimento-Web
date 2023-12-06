const arrayNumbers = [1, 3, 4, 5, 7, 79, 9, 8, 4, 2];

const sumArrayNumbers = arrayNumbers.reduce((preValue, currentValue) => {
    return preValue + currentValue;
}, 100) 

console.log(sumArrayNumbers);


const shoppingCart = [
    {product: "arroz", amount: 2, price: 20},
    {product: "café", amount: 3, price: 40},
    {product: "macarrão", amount: 4, price: 60}
];
const sumShoppingCart = shoppingCart.reduce((preValue, currentValue) => {
    return preValue + currentValue.price * currentValue.amount
}, 0)

console.log(sumShoppingCart);