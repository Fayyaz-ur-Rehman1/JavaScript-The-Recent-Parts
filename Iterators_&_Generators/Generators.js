// Genrators =>  Function ka controle pora ka pora hamare hatho me hota hai like a mai job bi statement print karvana chaho vo mai krvaskta hu jo nhi chata vo nhi krvaskta genrators ki help se function generators kai jitni bi statement likte on sab pe hamara controle hoga generators function ku help se function key word kai just age ya function name se just piche apn start ka use mai krte hai * isse generators function create hoga


function* gen() {
    yield ("one")
    console.log("hello");
    yield ("two")
    yield ("three")
    yield ("four")
    console.log("five");
}
let a = gen();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());

for (response of a) {
    console.log(response);
}

function* gen2() {
    // let res = yield;
    let res = (yield) / 10;

    console.log(`My RollNo is ${res}. `);
}
let b = gen2()
b.next()
b.next(500)
b.next("first")


function* gen3() {
    // let res = yield;
    let res = [yield, yield, yield, yield];
    console.log(`My RollNo is ${res}. `);
    console.log(`My RollNo is ${res[0]}. my name is ${res[1]}. i am study in class ${res[2]}th. and my RollNo Name Class all are ${res[3]}. `);
}
let c = gen3()
c.next()
c.next(11)
c.next("fayyazurrehman")
c.next(12)
c.next(true)


function* gen4() {
    yield 10;
    yield* ['JS', 'ReactJS', 'ExpressJS', 'NodeJS'];
    // yield ['JS', 'ReactJS', 'ExpressJS', 'NodeJS'];
}
let d = gen4()
// console.log(d.next());
console.log(d.next());
console.log(d.next());
d.next()
console.log(d.next());
console.log(d.next());


function* gen5() {
    yield 10;
    yield "JS";
    yield "ReactJS";
    yield "AngularJS"
}
let e = gen5()
console.log(e.next());
console.log(e.next());
console.log([...e]);

function* gen6() {
    yield "fayyaz";
    yield "danish";
    yield "sahanawaz";
}
let f = gen6();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.return("Helloo Guys Function is Ended..."));
console.log(f.next());