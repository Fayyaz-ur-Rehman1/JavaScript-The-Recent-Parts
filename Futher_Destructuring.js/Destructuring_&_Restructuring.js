
// Destructuring aur Restructuring JavaScript mein:

// Destructuring:

// "Destructuring" ek tarika hai jisse aap ek array ya object ke values ko alag-alag variables mein assign kar sakte hain. Yeh aapko code likhne mein flexibility aur readability provide karta hai.

// Array Destructuring:

const numbers = [1, 2, 3, 4];
const [a, b, , d] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(d); // 4

// Object Destructuring:

const person = { name: 'John', age: 30, city: 'New York' };
const { name, age } = person;

console.log(name); // John
console.log(age);  // 30

// Restructuring (Rest/Spread Operators):

// Yeh concept array aur object manipulation mein madad karta hai.

// Rest Operator (...):

// Rest operator ek array mein bache hue elements ko ek variable mein store karta hai.

const numbers1 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers1;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Spread Operator (...):

// Spread operator array ya object ke elements ko spread karke kisi aur array ya object mein include karne mein istemal hota hai.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
// Destructuring aur restructuring ka istemal aapko data manipulation mein help karta hai. Yeh code ko concise banane mein madad karta hai aur specific values ko extract karke ya combine karke aapki coding experience ko improve karta hai.