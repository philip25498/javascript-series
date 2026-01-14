//if condition example (without else)
/*if condition syntax
if (condition) {
    // code block to be executed if condition is true
}
*/
console.log('--- IF Statement Examples (No Else) ---\n');

// Example 1: Age check
let age = 20; // Example age variable
if (age >= 18) {
    console.log('You are an adult.'); // Message for age 18 or older
}

// Example 2: Employee status check
let isEmployed = true; // Example employment status
if (isEmployed) {
    console.log('You are employed.'); // Message if employed
}

// Example 3: Score check
let score = 80; // Example test score
if (score >= 75) {
    console.log('You passed the test!'); // Only shows if score is 75 or higher
}

// Example 4: Balance check
let balance = 500; // Bank balance
if (balance > 0) {
    console.log('Your account has funds.'); // Only shows if balance is positive
}

// Example 5: Item availability
let hasStock = true; // Product availability
if (hasStock) {
    console.log('Item is in stock.'); // Only shows if item is available
}

// Example 6: Temperature check
let temperature = 30; // Temperature in Celsius
if (temperature > 25) {
    console.log('It is a hot day.'); // Only shows if temperature exceeds 25
}

// Example 7: Multiple if statements (independent checks)
let username = 'admin'; // Username
let password = '12345'; // Password

if (username === 'admin') {
    console.log('Username is valid.'); // Checks username
}
if (password === '12345') {
    console.log('Password is correct.'); // Checks password independently
}

// Example 8: Nested if statements
let marks = 85; // Student marks
if (marks >= 50) { // First if
    console.log('Student passed.'); // Shows if marks >= 50
    if (marks >= 80) { // Second if (nested)
        console.log('Student got distinction.'); // Shows if marks >= 80
    }
}

