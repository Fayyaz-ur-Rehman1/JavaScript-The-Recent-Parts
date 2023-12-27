// Matching  
let pattern1 = /[a-z]/i; // i is ignore cases and maching all alfabate small or capital
let pass1 = "Aaf";
console.log(pattern1.exec(pass1));

let pattern2 = /[a-z]/;
let pass2 = "A123";
console.log(pattern2.exec(pass2));// answer is null beacuse patter2 is check only for small later 

let pattern3 = /[a-z]/i;
let pass3 = "123A";
console.log(pattern3.test(pass3)); // test is checking alfabate if alfabate are match then test give true  if alfabate are not match then test give false

let pattern4 = "i love javascript. Javascript is a most popular language in programing";
let pass4 = pattern4.match(/javascript/ig); // g or i check  i ignore cases and g is matching globaly like javascript write two time then we use g in regex then give output javascript javascript two time and match method is matching alfabate  
document.getElementById("demo").innerHTML = pass4;
// console.log(pass4);



// Starting Search() with a Regular Expression
let pass5 = "my name is  fayyaz";
let patter5 = pass5.search(/fayyaz/i); //  search method search word index give in seach mehod and give index
console.log(patter5);

// Starting replace() with regular Expression
let pass6 = "Welcome to Hello World";
let patter6 = pass6.replace(/Hello World/i, "Javascript");
console.log(patter6);

// Javascript regex password patterns
let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%/^&\*])(?=.{8,})/g;
let pass = "Fayyaz@4567";
let check = password.test(pass)
if (check == true) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}