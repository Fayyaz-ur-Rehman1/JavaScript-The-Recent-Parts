// avaScript mein async aur await keywords ka istemal asynchronous programming ke liye hota hai. Jab hum kisi function ke samay lagne wale tasks ko asynchronously execute karte hain, toh hum async aur await ka istemal karte hain.

// Async Function
// Jab aap kisi function ke samne async likhte hain, toh woh function ek special type ka hota hai, jise hum "asynchronous function" kehte hain.
// Async function ke andar aap multiple tasks ko ek saath start kar sakte hain, aur phir unke completion ka wait bhi kar sakte hain.

// Await Keyword
// await keyword async function ke andar use hota hai, jisse program execution wait karega jab tak ki await ke saath di gayi task complete na ho jaye.
// Yeh keyword sirf async functions ke andar hi kaam karta hai.

async function fn() {
    console.log('1:Hello');
    console.log('2:Hello');
    console.log('3:Hello');
    await console.log('4:Hello');
    console.log('5:Hello');
}
console.log("hello");
fn()
console.log("6:Hello");

async function fn2() {
    console.log("2: Massage");
    const response = await fetch("Async_Await/stdent_data.json");
    console.log("3: Massage");
    const student = await response.json();
    return student;
}
console.log("1: Massage");
let test = fn2();
console.log("4: Massage");
console.log(test);

async function fn3() {
    const response = await fetch("Async_Await/stdent_data.json");
    const student = await response.json();
    return student
}

fn3().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})

async function fn4() {
    try {
        const response = await fetch("Async_Await/stdent_data.json");
        const student = await response.json();
        return student
    } catch (error) {
        console.log(error);
    }
}
fn4().then((res) => {
    console.log(res);
})