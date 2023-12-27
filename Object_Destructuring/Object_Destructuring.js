// Object kai andr keys kai base pr Destructuring hoti hai 

// const obj = {
//     name: "fayyaz",
//     age: 17,
//     study: 12
// }
// console.log(`my name is ${obj.name}. and my age is ${obj.age}. and i study in class ${obj.study}th.`);
// let { name, age, study } = obj // this is object Destructuring
// console.log(`my name is ${name}. and my age is ${age}. and i study in class ${study}th.`); // we are not rigth obj.name obj.age you rigth only name age study

// let name, age, study;
// ({
//     name,
//     age,
//     study,
// } = obj);
// console.log(`my name is ${name}. and my age is ${age}. and i study in class ${study}th.`); // we are not rigth obj.name obj.age you rigth only name age study

// let { name: myname, age: ages, study } = obj;
// console.log(`my name is ${myname}. and my age is ${ages}. and i study in class ${study}th.`); // we are not rigth obj.name obj.age you rigth only name age study

const obj2 = {
    name: "fayyaz",
    age: 17,
    hobby: {
        first: "programming",
        sec: "playing"
    }
}
let { name, age, hobby } = obj2;
console.log(`my name is ${name}. my age is ${age} and i love ${hobby.first} and my second hobby is i love ${hobby.sec}`);