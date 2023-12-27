function fn() {
    console.log(arguments.length);
    console.log(arguments);
    console.log(arguments[2]);
    if (arguments.length == 0) {
        console.log("No argument Passed!");
    } else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i]
        }
        console.log(sum);
    }
}
// fn() // No argument Passed!
fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)//55
// fn(1, 2, 3, 4);
// fn(1, 2, 3, 4, 5);
// fn(5, 7, 8, 9, 1, 3);