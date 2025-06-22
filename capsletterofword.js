// This function capitalizes the first letter of each word in a given string.
// It splits the string into words, capitalizes the first letter of each word, and then
// joins them back together into a single string.s
function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

// Example usage:
console.log(capitalizeWords("hello world"));  // Output: "Hello World"