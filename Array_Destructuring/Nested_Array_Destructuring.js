// const arr = [1, 2, [3, 4, 5], 6];
// const [a, b, [c, d, e], f] = arr;
// console.log([a, b, [c, d, e], f]);

// const arr1 = [1, 2, [3, 4], 5, [6, 7], 8];
// const [g, h, [i, z], o, [t, s], p] = arr1;
// console.log([i, z]);
// console.log([t, s]);

// const arr2 = ['fayyaz', 'khilji', ['danish', 'chouhan'], 'adnan', 'chouhan', ['uzair', 'khilji'], 'ayyaz']
// const [fa, kh, [da, ch], ad, ch1, [uz, kh1], ay] = arr2;
// // console.log([da, ch], [fa, kh], [uz, ch1]);
// console.log([fa, kh, [da, ch], ad, ch1, [uz, kh1], ay]);
// console.log([fa,kh]);
// console.log([da, ch], [ay]);

// const str = "fayyaz'urrehman'is my name";
// const [aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll, mm, nn, oo, pp] = str;
// console.log([aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll, mm, nn, oo, pp]);
// console.log([ee]);
// // nested array

const arr3 = ['fayyaz', 'khilji', ['danish', 'chouhan'], 'adnan', 'chouhan', ['uzair', 'khilji'], 'ayyaz'];
const [a, b, [c, d], e, f, [g, h], j] = arr3;
// console.log(c);

const arr4 = [[
    ['fayyaz', 'urrehman'],
    ['uzair', 'khilji'],
], [
    ['adnan', 'chouhan'],
    ['danish', 'chouhankhan'],
],
];
const [firstgroup, secondgroup] = arr4;
const [[fayyaz, urrehman], [uzair, khilji]] = firstgroup;
const [[,,chouhan], [danish, chouhankhan, fake = "deafultValue"]] = secondgroup;
console.log(fayyaz);
console.log(urrehman);
console.log(uzair);
console.log(khilji);
// console.log(adnan);
console.log(chouhan);
console.log(danish);
console.log(chouhankhan);
console.log(fake);
