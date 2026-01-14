//nested statements
/*
Nested If Statements Example
if (condition1) {
    // code block to be executed if condition1 is true
    if (condition2) {
        // code block to be executed if condition2 is also true
    }
}
*/
console.log('--- NESTED IF STATEMENT EXAMPLE ---\n');
let num = 15; // Example number variable
if (num > 0) { // First condition: check if number is positive
    console.log(`${num} is a positive number.`); // Message for positive number
    if (num % 2 === 0) { // Nested condition: check if number is even
        console.log(`${num} is also an even number.`); // Message for even number
    } else {
        console.log(`${num} is an odd number.`); // Message for odd number
    }
} else {
    console.log(`${num} is not a positive number.`); // Message for non-positive number
}
// SWITCH CASE EXAMPLE
/* switch (expression) {
    case value1:
        // code block to be executed if expression === value1
        break;
    case value2:
        // code block to be executed if expression === value2
        break;
    ...

    default:
        // code block to be executed if expression doesn't match any case
} */
let grade = 'v'; // Example grade variable
switch (grade) {
    case 'A':
        console.log('Excellent work!');
        break;
    case 'B':
        console.log('Good job!');
        break;
    case 'C':
        console.log('You passed.');
        break;
    case 'D':
        console.log('You need to improve.');
        break;
    case 'F':
        console.log('Failed. Better luck next time.');  
        break;
    default:
        console.log('Invalid grade.');
}
// end of my  nested statements examples