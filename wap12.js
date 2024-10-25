let a = 15;
let b = 5;

// Arithmetic Operations
console.log("Arithmetic Operations:");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Assignment Operations
console.log("\nAssignment Operations:");
let c = a;
console.log("c =", c);
a += b;
console.log("a += b:", a);
a -= b;
console.log("a -= b:", a);
a *= b;
console.log("a *= b:", a);
a /= b;
console.log("a /= b:", a);

// Comparison Operations
console.log("\nComparison Operations:");
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

// Logical Operations
console.log("\nLogical Operations:");
console.log("a > 10 && b < 10:", a > 10 && b < 10);
console.log("a > 10 || b > 10:", a > 10 || b > 10);
console.log("!(a > b):", !(a > b));

// Conditional (Ternary) Operator
let result = a > b ? "a is greater" : "b is greater";
console.log("\nConditional Operator:", result);

// Type Operations
console.log("\nType Operations:");
console.log("Type of a:", typeof a);
console.log("Is a a number?", typeof a === 'number');

// Bitwise Operations
console.log("\nBitwise Operations:");
console.log("a & b:", a & b);
console.log("a | b:", a | b);
console.log("a ^ b:", a ^ b);
console.log("a << 1:", a << 1);
console.log("a >> 1:", a >> 1);
