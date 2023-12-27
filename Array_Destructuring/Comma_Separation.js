let arr = [1, 2, 3, 4, 'fayyaz'];
const [a, , , , b] = arr;
console.log([a, b]);

let arr1 = [2, 3, 4, 5, 6, 7, 8];
let [c, , , , d] = arr1;
console.log([c, d]);

let arr2 = [1, 2, 3, 4, 5, 6, 7];
let [, , , s, , t] = arr2;
console.log([s, t]);

let arr3 = ['fayyaz', 'danish', 'adanan', 'ayyaz', 'amjad'];
let [y, , , z] = arr3;
console.log([y, z]);

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
let [f, , , , g] = arr4;
console.log([f, g]);

let arr5 = [1, 2, [5, 6, 7, [11, 12, 13], 8, 9, 10], 3, 4];
let [, i, j ] = arr5
console.log([i, j]);
// comma sapration
let commaspration =['JS','HTML&CSS','NodeJS','Express','figma','Git'];
let [top1,,,top2] = commaspration;
console.log([top1,top2]);