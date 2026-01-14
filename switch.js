// switch case example
/*switch case syntax
switch (expression) {
    case value1:
        // code block to be executed if expression === value1
        break;
    case value2:
        // code block to be executed if expression === value2
        break;
    ...

    default:
        // code block to be executed if expression doesn't match any case
}
*/
let grade = 'B'; // Example grade variable
switch (grade) {
    case 'A':
        console.log('Excellent work!'); // Message for grade A
        break;
    case 'B':
        console.log('Good job!'); // Message for grade B
        break;
    case 'C':
        console.log('You passed.'); // Message for grade C
        break;
    case 'D':
        console.log('You need to improve.'); // Message for grade D
        break;
    case 'F':
        console.log('Failed. Better luck next time.'); // Message for grade F
        break;
    default:
        console.log('Invalid grade.'); // Message for invalid grade
}   
// ADAPTIVE SWITCH CASE EXAMPLE
// Change the 'day' variable and see how the switch adjusts automatically
var day = 3; // Change this value (1-7) to test different days

console.log('\n--- Day of Week Example ---');
switch (day) {
    case 1:
        console.log('Monday'); // Change day to 1 to see this
        break;
    case 2:
        console.log('Tuesday'); // Change day to 2 to see this
        break;
    case 3:
        console.log('Wednesday'); // Change day to 3 to see this
        break;
    case 4:
        console.log('Thursday'); // Change day to 4 to see this
        break;
    case 5:
        console.log('Friday'); // Change day to 5 to see this
        break;
    case 6:
        console.log('Saturday'); // Change day to 6 to see this
        break;
    case 7:
        console.log('Sunday'); // Change day to 7 to see this
        break;
    default:
        console.log('Invalid day number'); // Shows if day is not 1-7
}

// EXAMPLE 2: Size selector that adjusts output based on size value
console.log('\n--- Size Selection Example ---');
var size = 'M'; // Change this to 'S', 'M', 'L', 'XL' to see different outputs

switch (size) {
    case 'S':
        console.log('Size: Small - Price: $10'); // Change size to 'S'
        break;
    case 'M':
        console.log('Size: Medium - Price: $15'); // Change size to 'M'
        break;
    case 'L':
        console.log('Size: Large - Price: $20'); // Change size to 'L'
        break;
    case 'XL':
        console.log('Size: Extra Large - Price: $25'); // Change size to 'XL'
        break;
    default:
        console.log('Invalid size'); // Shows for invalid sizes
}

// EXAMPLE 3: Color selector with output based on color
console.log('\n--- Color Selection Example ---');
var color = 'blue'; // Change to 'red', 'blue', 'green', 'yellow'

switch (color) {
    case 'red':
        console.log('Color: Red - Hex: #FF0000'); // Change color to 'red'
        break;
    case 'blue':
        console.log('Color: Blue - Hex: #0000FF'); // Change color to 'blue'
        break;
    case 'green':
        console.log('Color: Green - Hex: #00FF00'); // Change color to 'green'
        break;
    case 'yellow':
        console.log('Color: Yellow - Hex: #FFFF00'); // Change color to 'yellow'
        break;
    default:
        console.log('Color not found'); // Shows for undefined colors
}
// end of switch case examples
