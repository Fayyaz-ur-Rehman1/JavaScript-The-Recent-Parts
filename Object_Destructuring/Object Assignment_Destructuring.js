// Object kai andr keys kai base pr Destructuring hoti hai 

const user = { name: "fayyaz", email: "fayyyazurrehman@gmail.com", mobile: 8458475847 };
let { email, name, mobile = 88, mob = 888 } = user;
console.warn(email, mobile);
console.warn(name, email);
console.warn(mob);

const obj = { fname: "fayyaz", lname: "urrehman", study: 12 };
let { fname, ...study } = obj;
console.log(study);;
// let { study, ...lname } = obj;
// console.log(lname);