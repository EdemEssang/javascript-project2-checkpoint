// This function checks if a number is prime or not.
// It iterates from 2 to the number itself, checking if it is divisible by any
// of those numbers. If it is divisible, it returns false; otherwise, it returns true.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage:
console.log(isPrime(11)); // true