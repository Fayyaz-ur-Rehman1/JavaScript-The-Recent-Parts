let name = "fayyaz";
let age = 17;
function tamplate(static, ...tags) {
    // console.log(static);
    // console.log(tags);
    return static
}
const a = tamplate`my name is ${name} my age is ${age}`;
console.log(a);

let fname = "fayyaz";
let lname = "urrehman";
let study = 12;

function tagFn(static, ...tags) {
    // return static
    console.log(static);
    console.log(tags);
}
tagFn`my first name is ${fname}. my last name is ${lname}. i am study in class ${study}th.`;