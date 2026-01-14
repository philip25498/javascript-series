// while loop example
/*while loop syntax
while (condition) {
    // code block to be executed
}
*/
let i = 0; // Initialize counter
while (i < 5) { // Loop while i is less than 5
    console.log(`Iteration number: ${i}`); // Print current iteration
    i++; // Increment counter
}
// while loop for array
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']; // Array of fruits
let j = 0; // Initialize index
while (j < fruits.length) { // Loop through all fruits
    console.log(`Fruit at index ${j}: ${fruits[j]}`); // Print fruit at index
    j++; // Move to next index
}   
// while loop with inner and outer loop
let m = 1; // Outer loop counter
while (m <= 3) { // Outer loop runs 3 times
    console.log(`Outer loop iteration: ${m}`); // Print outer iteration
    let n = 1; // Inner loop counter
    while (n <= 5) { // Inner loop runs 5 times
        console.log(`  Inner loop iteration: ${n}`); // Print inner iteration
        n++; // Increment inner counter
    }
    m++; // Increment outer counter
}
// while loop for 3 loops
let a = 1; // First loop counter
while (a <= 2) { // First loop runs 2 times
    console.log(`First loop iteration: ${a}`); // Print first iteration
    let b = 1; // Second loop counter
    while (b <= 2) { // Second loop runs 2 times
        console.log(`  Second loop iteration: ${b}`); // Print second iteration
        let c = 1; // Third loop counter
        while (c <= 2) { // Third loop runs 2 times
            console.log(`    Third loop iteration: ${c}`); // Print third iteration
            c++; // Increment third counter
        }
        b++; // Increment second counter
    }
    a++; // Increment first counter
}
// end of while  loop examples