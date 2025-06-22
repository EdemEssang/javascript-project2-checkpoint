
// This function takes a string as input and returns the number of characters in it.

function countCharactersManual(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

// Example usage:
console.log(countCharactersManual("test"));  // Output: 4