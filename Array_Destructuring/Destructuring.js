// Array kai andr index kai base pr Destructuring hoti hai

// JavaScript mein "destructuring" ek feature hai jo arrays aur objects se values ko extract (bahar nikalna) karne mein madad karta hai. Iska mtlb hai ki aap arrays ya objects se specific values ko alag karke variables mein store kar sakte hain, jo ki code ko compact aur readable banata hai.
// // // normal
// // let arr1 = [1, 2]
// // let e = arr1[0]
// // let f = arr1[1]
// // console.log(e);
// // console.log(f);

// // // rigth 
// let arr = [10, 20, 30, "fayyaz"];
// let [a, b, c, d] = arr
// console.log(typeof a);


// let arr2 = {a:1,b:2};
// let {a,b} = arr2;
// console.log(a);

// // // String
// let str = "fayyaz";
// let [g, h, i, j, k, l] = str;
// console.log([h , j]);

// // let str1 = "fayyaz";
// // let [a, b, c, d, e, f] = str1;
// // console.log([a + b + c + d + e + f]);

// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let [m, n, o, p, q, r, s] = arr2;
// console.log([o, q]);

// let arr3 = ['fayyaz', "danish", 'adnan'];
// let [t, w, x] = arr3;
// console.log([t, w, x]);


// const Numbers = [1, 2, 3];
// let stored;
// [
//     num1,
//     num2,
//     num3,
// ] = stored = Numbers
// console.log(stored);

// let a = [1, 2, 3, 4];
// let b;
// [c, d, e] = b = a
// console.log(b);


// let x1 = 10;
// let y = 20;
// {
//     let tmp = x1;
//     x1 = y;
//     y = tmp;
// }
// console.log(x1, y)

// var f1 = 10;
// var z = 20;
// [f1, z] = [z, f1]
// console.log([f1, z]);


// let num1 = 20;
// let num2 = 10;

// {
//     let temp = num1;
//     num1 = num2;
//     num2 = temp
// }
// console.log(num1, num2);

// destructuring

// let language = ['JS','HTML&CSS','NodeJS','Express','figma','Git'];
// let [top1,top2,top3,top4,top5,top6] = language;
// console.log(`My favriout language is ${top1} and 2nd favrouite language is ${top3}`);

// let a = 10;
// let b = 20;
// let c = a;
// // a = b;
// // b = c
// [a,b] = [b,a]
// console.log(a);
// console.log(b);