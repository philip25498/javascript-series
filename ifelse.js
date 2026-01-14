//if else conditional examples
/* if else syntax
if (condition) {
    // code block to be executed if condition is true
} else {
    // code block to be executed if condition is false
}
*/
console.log('--- IF ELSE Statement Examples ---\n');
// Example 1: Age check
let age = 16; // Example age variable
if (age >= 18) {
    console.log('You are an adult.'); // Message for age 18 or older
} else {
    console.log('You are a minor.'); // Message for under 18
}
// Example 2: Employee status check
let isEmployed = false; // Example employment status
if (isEmployed) {
    console.log('You are employed.'); // Message if employed
} else {
    console.log('You are unemployed.'); // Message if not employed
}   
// Example 3: Score check
let score = 60; // Example test score
if (score >= 75) {
    console.log('You passed the test!'); // Shows if score is 75 or higher
} else {
    console.log('You failed the test.'); // Shows if score is below 75
}
// Example 4: Balance check 
let balance = -50; // Bank balance
if (balance > 0) {
    console.log('Your account has funds.'); // Shows if balance is positive 
} else {
    console.log('Your account is overdrawn.'); // Shows if balance is zero or negative
}   
// Example 5: Item availability
let hasStock = false; // Product availability
if (hasStock) {
    console.log('Item is in stock.'); // Shows if item is available
} else {
    console.log('Item is out of stock.'); // Shows if item is not available
}
// Example 6: Temperature check
let temperature = 15; // Temperature in Celsius
if (temperature > 25) {
    console.log('It is a hot day.'); // Shows if temperature exceeds 25
} else {
    console.log('It is not a hot day.'); // Shows if temperature is 25 or below
}
// Example 7: Username and password check
let username = 'user'; // Username
let password = 12345; // Password
if (username === 'user' && password === 12345) {
    console.log('Access granted.'); // Shows if both username and password are correct
} else {
    console.log('Access denied.'); // Shows if either username or password is incorrect
}
//end of  my if else  examples