// Using the Date object
function displayCurrentDate() {
    const currentDate = new Date();
    console.log("Current Date and Time: " + currentDate.toString());
}

// Using the Math object
function performMathOperations() {
    const num1 = 10;
    const num2 = 3;
    
    console.log(`Math Operations on ${num1} and ${num2}:`);
    console.log("Addition: " + (num1 + num2));
    console.log("Subtraction: " + (num1 - num2));
    console.log("Multiplication: " + (num1 * num2));
    console.log("Division: " + (num1 / num2));
    console.log("Power: " + Math.pow(num1, num2));
    console.log("Square Root of " + num1 + ": " + Math.sqrt(num1));
    console.log("Random Number: " + Math.random());
}

// Using the String object
function manipulateStrings() {
    const str = "  Hello, JavaScript!  ";

    console.log("Original String: '" + str + "'");
    console.log("Trimmed String: '" + str.trim() + "'");
    console.log("Uppercase: '" + str.toUpperCase() + "'");
    console.log("Lowercase: '" + str.toLowerCase() + "'");
    console.log("Substring (from index 2 to 5): '" + str.substring(2, 5) + "'");
    console.log("String Length: " + str.length);
}

displayCurrentDate();
performMathOperations();
manipulateStrings();
