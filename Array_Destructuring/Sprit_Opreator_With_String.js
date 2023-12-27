const str = "fayyaz";
console.log(...str);
console.log([...str]);

const str1 = "fayyazurrehman";
const [a, b, ...c] = str1;
console.log(c);
console.log([...str1].join(""));

const spread_op = "The Pain"

console.log(spread_op) //normal
console.log(...spread_op) // spread operation -- it will spread each letter.
console.log([...spread_op]) // it will return with strings
// sprit opreator with string