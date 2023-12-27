//  in es5 five one string concat second string then use + opreator
console.log("my name is fayyazurrehman" + "my age is 17");
//   in es6 one string concat second string then use `` that is tamplate literls
console.log(`my name is fayyazurrehman my age is 17`);

let firstName = "fayyaz";
let lastName = "urrehman";
// es5
console.log("my first name is " + firstName + " and my last name " + lastName + ".");
// es6
console.log(`my first name is ${firstName} and my last name is ${lastName}.`);

let a = 20;
let b = 30;
// es5
console.log("Fifty is " + (a + b) + "\nnot" + (2 * a + b));
// es6
console.log(`Fifty is ${a + b} 
not ${2 * a + b}.`);

const tem = 10;
const tem2 = 7;
const str = "fayyaz";
console.log(`my name is ${str} my age is ${tem + tem2}`);