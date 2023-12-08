// Initialize an array with some initial elements
let myArray: number[] = [1, 2, 3, 4, 5];

console.log("Initial Array:", myArray);

// Using push to add new elements to the end of the array
myArray.push(6, 7);
console.log("Array after push:", myArray);

// Using pop to remove the last element from the array
const poppedElement: number | undefined = myArray.pop();
console.log("Popped Element:", poppedElement);
console.log("Array after pop:", myArray);

// Using shift to remove the first element from the array
const shiftedElement: number | undefined = myArray.shift();
console.log("Shifted Element:", shiftedElement);
console.log("Array after shift:", myArray);

// Using unshift to add new elements to the beginning of the array
myArray.unshift(-1, 0);
console.log("Array after unshift:", myArray);