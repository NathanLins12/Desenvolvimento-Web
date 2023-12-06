// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Logical Operators (Boolean)

// and  &&
// or   ||
// not  !

const creditCard = true
const hasCredit = true

console.log(!creditCard);
console.log(creditCard);

console.log(creditCard && hasCredit);

const saveMoney = true
const getLoan = true

console.log(saveMoney || !getLoan);