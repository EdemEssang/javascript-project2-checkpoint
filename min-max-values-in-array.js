
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) min = num;
    }
    return min;
}

// usage 
const numbers = [5, 2, 9, 1, 7];

console.log(findMax(numbers)); // Output: 9
console.log(findMin(numbers)); // Output: 1

const { min, max } = findMinMax(numbers);
console.log(`Min: ${min}, Max: ${max}`); // Output: Min: 1, Max: 9