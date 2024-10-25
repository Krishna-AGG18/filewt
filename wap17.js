// Built-in Functions in JavaScript

// String Methods
const str = "hello";
console.log("Uppercase:", str.toUpperCase()); // "HELLO"

const sentence = "Hello World";
const words = sentence.split(" ");
console.log("Split words:", words); // ["Hello", "World"]

// Array Methods
const arr = [1, 2, 3];
arr.push(4);
console.log("Array after push:", arr); // [1, 2, 3, 4]

const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);
console.log("Squares:", squares); // [1, 4, 9]

// Math Methods
const max = Math.max(1, 3, 2);
console.log("Max value:", max); // 3

const randomNum = Math.random();
console.log("Random number:", randomNum); // e.g., 0.123456789

// Date Methods
const date = new Date();
console.log("Current Year:", date.getFullYear()); // e.g., 2024

console.log("ISO String:", date.toISOString()); // e.g., "2024-10-25T12:34:56.789Z"

// JSON Methods
const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj);
console.log("JSON String:", jsonString); // '{"name":"Alice","age":25}'

const parsedObj = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObj); // { name: "Alice", age: 25 }
