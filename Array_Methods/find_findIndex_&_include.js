let a = [1, 2, 3, 4, 5, 6];
let b = a.find(arrfindelement);
console.log(b);
function arrfindelement(a) {
    return a < 2;
}

let c = [1, 2, 3, 4, 5, 6, 7];
let d = c.findIndex(arrindexindelement);
console.log(d);
function arrindexindelement(b) {
    return b > 4;
}

let e = ['fayyaz', 'anis', 'adanan'];
let f = e.includes('fayyaz');
console.log(f);