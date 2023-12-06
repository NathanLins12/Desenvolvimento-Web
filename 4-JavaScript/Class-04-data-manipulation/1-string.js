let myName = "Nathan"

console.log(myName.length); 
console.log(myName.__proto__); 
console.log(myName[1]); 
console.log(myName.toLocaleUpperCase); 
console.log(myName.toLocaleLowerCase); 
console.log(myName.toUpperCase); 

console.log(myName[1]); 
console.log(myName[1] = "L"); //string immutable
console.log(myName = "outra coisa");
console.log(myName);

let phrase = "Im a web developer"

console.log(phrase.split(" ")[1] = "WEB"); 
console.log(phrase.split("").reverse().join(" "))

console.log(phrase.replace("web", "WEB"));
console.log(phrase);

console.log(phrase.indexOf(""));
console.log(phrase);
console.log(phrase.trim());
console.log(phrase.substring());

console.log(phrase.includes("web"));
console.log(phrase.includes("Web"));
console.log("web" == "Web");  //case-sensitive
console.log(phrase.toLocaleLowerCase().includes("web") ?  "teste verdadeiro" : "teste falso");
console.log(phrase.includes);

const aplication = {
    console: function log() {
        return "imprimir"
    }
} 

console.log();

const consoles = {
    log: () => {
    return "imprimir"
    },

    error: ()=> {
    return "imprimir error"
    },
};

console.log("test");
