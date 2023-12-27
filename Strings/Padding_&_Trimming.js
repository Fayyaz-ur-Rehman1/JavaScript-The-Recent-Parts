
// JavaScript mein "padding" ka istemal strings ko specific length tak extend karne ke liye hota hai. Padding ka mtlb hota hai kisi string ko additional characters se fill karna, taaki wo specific length tak pahunch sake
// padding => padStart , padEnd
let padstart = "fayyaz";
let strstart = padstart.padStart(10, "*")
console.log(strstart);

let padend = "fayyaz";
let strend = padend.padEnd(20, "*")
console.log(strend);

// JavaScript mein "trim" ek string manipulation method hai jo ek string ke shuru aur anth ke extra spaces, tabs, aur newline characters ko hatakar clean string bana deta hai. Yeh String object ke method trim() ke zariye kiya jata hai.
// Trimming => trim , trimStart , trimEnd
let trim1 = "fayyaz      ";
console.log(trim1);
console.log(trim1.length);
let strtrim = trim1.trim();
console.log(strtrim);
console.log(strtrim.length);

let trimstart = "     fayyyaz    ";
console.log(trimstart.length);
let strtrimstart = trimstart.trimStart();
console.log(strtrimstart);
console.log(strtrimstart.length);

let trimend = "     fayyyaz    ";
console.log(trimend.length);
let strtrimend = trimend.trimEnd();
console.log(strtrimend);
console.log(strtrimend.length);