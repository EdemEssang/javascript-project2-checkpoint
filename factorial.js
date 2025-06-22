// This function calculates the factorial of a non-negative integer n.
// It uses an iterative approach to compute the factorial, which is the product of all positive integers
// less than or equal to n.
// It returns NaN for negative inputs, and 1 for 0 or 1.

function factorial(n) {
    if (n < 0) return NaN; // Factorial of negative numbers is undefined
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120