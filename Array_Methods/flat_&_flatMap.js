// flat aur flatMap JavaScript ke Array ke methods hain, jo ke arrays ko manipulate karne mein madad karte hain. Main yahan aapko in dono methods ka basic idea dunga:

// flat method ka istemal multi-dimensional (nested) arrays ko ek level ke andar flatten karne ke liye hota hai. Yani agar aapke paas ek array hai jisme doosre arrays bhi hain, aur aap chahte hain ki wo sabhi values ek hi level pe aa jaye, to aap flat ka istemal kar sakte hain.

const nestedArray = [1, [2, 3], [4, 5, [6, 7]]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5, [6, 7]]


// let arr1 = ['fayyaz',['danish',['adnan',['mikail']]]]
// let arr2 = arr1.flat();
// console.log(arr2);
// const nestedArray = [1, [2, 3], [4, [5, 6]]];

// const flatArray = nestedArray.flat();

// console.log(flatArray); // Output: [1, 2, 3, 4, [5, 6]]

// flatMap method ka istemal ek array ko transform karne ke liye hota hai, aur uske baad use flatten kar deta hai. Isme aap ek function pass karte hain jo har element ko transform karega, aur phir ye transformed values ko ek hi level pe laake ek naya array banata hai.

const numbers = [1, 2, 3, 4];
const doubledAndFlattened = numbers.flatMap(num => [num * 2]);
console.log(doubledAndFlattened);
// Output: [2, 4, 6, 8]
