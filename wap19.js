// Function to calculate factorial
function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Function to find prime numbers in a range
function findPrimes(start, end) {
    let primes = [];
    
    for (let num = start; num <= end; num++) {
        if (num > 1) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(num);
            }
        }
    }
    return primes;
}

// Function to reverse a number
function reverseNumber(num) {
    return num.toString().split('').reverse().join('');
}

    console.log("Factorial of 5:", factorial(5)); // Output: 120
console.log("Prime numbers between 10 and 50:", findPrimes(10, 50)); // Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
console.log("Reverse of 12345:", reverseNumber(12345)); // Output: "54321"