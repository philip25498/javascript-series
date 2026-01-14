// for loop example in JavaScript
for (let i = 0; i < 5; i++) {
    console.log(`Iteration number: ${i}`);
}   
//for loop for array
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}: ${fruits[i]}`);
}
//for loop with inner and outer loop   
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop iteration: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`  Inner loop iteration: ${j}`);
    }
}