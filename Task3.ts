// Initialize an array with some initial elements
let myArray = [1, 2, 3, 4, 5];

// Demonstrate the usage of array methods
console.log("Original Array:", myArray);

// push: Add new elements to the end of the array
myArray.push(6, 7);
console.log("After push:", myArray);

// pop: Remove the last element from the array
myArray.pop();
console.log("After pop:", myArray);

// shift: Remove the first element from the array
myArray.shift();
console.log("After shift:", myArray);

// unshift: Add new elements to the beginning of the array
myArray.unshift(-2, -1, 0);
console.log("After unshift:", myArray);

// Using the same array from Scenario 1
console.log("\nOriginal Array:", myArray);

// splice: Create a subarray by removing elements from the original array
let removedElements = myArray.splice(2, 2); // Removes 2 elements starting from index 2
console.log("Subarray using splice:", myArray);
console.log("Removed Elements:", removedElements);

// Reset the array for the next operation
myArray = [1, 2, 3, 4, 5];

// slice: Create a subarray without modifying the original array
let subArray = myArray.slice(1, 4); // Extract elements from index 1 to (4-1)
console.log("\nOriginal Array:", myArray);
console.log("Subarray using slice:", subArray);
