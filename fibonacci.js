// This function generates the Fibonacci sequence up to a specified number of terms.
// It initializes the first two terms and iteratively calculates the next terms by summing the last
// two terms in the sequence. The function returns an array containing the Fibonacci sequence.

function generateFibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    
    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence;
}

// Example usage: Generate the first 6 Fibonacci numbers
const fibonacciNumbers = generateFibonacci(6);
console.log(fibonacciNumbers); // Output: [0, 1, 1, 2, 3, 5]    