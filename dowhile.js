// do while loop example
/*do while loop syntax
do {   
    // code block to be executed
} while (condition);
*/
let i = 0; // Initialize counter
do { // Start of do-while loop
    console.log(`Iteration number: ${i}`); // Print current iteration
    i++; // Increment counter
} while (i < 5);
// do while loop for array
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']; // Array of fruits
let j = 0; // Initialize index
do { // Start of do-while loop
    console.log(`Fruit at index ${j}: ${fruits[j]}`); // Print fruit at index
    j++; // Move to next index
} while (j < fruits.length);    
// do while loop with inner and outer loop
let m = 1; // Outer loop counter 
do { // Start of outer do-while loop
    console.log(`Outer loop iteration: ${m}`); // Print outer iteration
    let n = 1; // Inner loop counter
    do { // Start of inner do-while loop
        console.log(`  Inner loop iteration: ${n}`); // Print inner iteration
        n++; // Increment inner counter
    } while (n <= 5);
    m++; // Increment outer counter
} while (m <= 3);
// do while loop for 3 loops

let a = 1; // First loop counter
do {                                 // Start of first do-while loop
    console.log(`First loop iteration: ${a}`); // Print first iteration
    let b = 1; // Second loop counter
    do { // Start of second do-while loop
        console.log(`  Second loop iteration: ${b}`); // Print second iteration
        let c = 1; // Third loop counter
        do { // Start of third do-while loop
            console.log(`    Third loop iteration: ${c}`); // Print third iteration
            c++; // Increment third counter
        } while (c <= 2); 
        b++; // Increment second counter
    } while (b <= 2);
    a++; // Increment first counter
} while (a <= 2);
// end of do while loop examples