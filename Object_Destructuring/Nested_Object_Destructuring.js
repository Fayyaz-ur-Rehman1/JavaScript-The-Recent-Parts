const obj = {
    name: "fayyazurrehman", age: 17,
    address: {
        parmanent: { flatNo: 23, city: "Jodphur" },
        temprorary: { flatNo: 34, city: "Rajasthan" },
    },
    phone: [8378787878, 9898989898]
}
// obj.name // fayyazurrehman
// obj.age // 17

// const {name , age , address} = obj;
// console.log(address.temprorary.flatNo);
// console.log(address.parmanent.city);
// const { name, age, address: { parmanent: { city }, temprorary: { flatNo } } } = obj;
// console.log(temprorary);
// console.log(city);
// console.log(flatNo);
// console.log(address);
// const { name: userName, age, address : {parmanent : {city:homeTown}} } = obj;
// console.log(userName);
// console.log(age);
// console.log(homeTown);
// console.log(homeTown);
// const {name , age , address,phone:[a,b]} = obj;
// console.log(phone);
// console.warn(a,b);
// console.log(a,b);
const { name, age, address, phone } = obj;
let [homePhonenNo, telePhoneNo] = phone;
console.warn(telePhoneNo, phone);