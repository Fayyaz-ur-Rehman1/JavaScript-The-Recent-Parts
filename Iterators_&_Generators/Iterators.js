
// iterator and loop diffrence => loop kai andr jo pora looping ka controle hota hai vo hamare hatho mai  nahi hota hai kiu ki hame ek bar loop chala diya tu oske bad jo value hai loop kai andr vo sari kai sari ek bar hi print hu jayagi itrators => agr mai kuch aisa krna chata hu kai jese pahli vali value ko chod ke ya dusri vali vlaue ko chod ke baki sari value print hu jayai apn loops kai andr bi kr sakte hai but apnko if vali condition lagani padegi jo hamara new method aya hai iterators iske andr jo tervarsing ka controle hota hai vo hamare hands kai andr hi hota hai hm jo bi value konsi bi value ko print krna chata hai vo kr sakte hai iterators ki helps se itertors => itertors means har value kai upr travel krna 

// let arr = [10, 20, 30, 40, 50, 60];
// let arritr = arr[Symbol.iterator]();
// console.log(arritr);
// arritr.next()
// arritr.next()
// console.log(arritr.next());
// arritr.next()

// console.log(arritr.next());
// console.log(arritr.next());
// let result = arritr.next()
// while (!result.done) {
//     console.log(result.value);
//     result = arritr.next()
// }
// function ownIterFn(arr) {
//     let arrNum = 0;

//     return {
//         next() {
//             if (arrNum < arr.length) {
//                 return {
//                     value: arr[arrNum++],
//                     done: false
//                 }
//             } else {
//                 return {
//                     value: arr[arrNum],
//                     done: true
//                 }
//             }

//         }
//     }
// }
// let arr = [100, 200, 300, 100, 2242]
// let own = ownIterFn(arr)
// console.log(own.next());
// console.log(own.next());
// console.log(own.next());
// console.log(own.next());
// console.log(own.next());
// console.log(own.next());

// let arr1 = ["one", "two", "three"];
// console.log(typeof arr1[Symbol.iterator]);
// console.log(arr1);

let arr3 = ["one", "two", "three"];
let arr4 = arr3[Symbol.iterator]();
console.log(arr4);
console.log(arr4.next());
arr4.next(); // skip the value in array
console.log(arr4.next().value); // get the value
console.log(arr4.next().done);

let str1 = "Fayyazurrehman";
let str2 = str1[Symbol.iterator]();
console.log(str2);
console.log(str2.next());
console.log(str2.next());

let reponse = str2.next();

while (!reponse.done) {
    console.log(reponse.value);
    reponse = str2.next();

}

for (let i of str2) {
    console.log(i);
}

for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

let customFunction = (res) => {
    let initialValue = 0;
    return {
        next() {
            return {
                value: res[initialValue++],
                done: initialValue < res.length + 1 ? false : true
            }
        }
    }
}

let arr5 = ['first', 'second', 'third', 'fourth'];
let arr6 = customFunction(arr5);
console.log(arr6.next());
console.log(arr6.next());
console.log(arr6.next());
console.log(arr6.next());
console.log(arr6.next());