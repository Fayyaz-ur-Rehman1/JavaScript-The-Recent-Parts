// Object
const obj = {
    name: "fayyaz",
    age: 17,
}
let { name, age, salary = 100 } = obj;
console.log(`my name is ${name}. my age is ${17}. and my salary is ${salary}.`);

// Array

const arr = [1, 2];
let [a, b, c = 0] = arr
console.log(`First Number is ${a}. Second Number is ${b}. and third Number is ${c}.`);