function add(a: number, b: number): number {
    return a + b;
}

function checkEvenOrOdd(num: number): string {
    return num % 2 === 0 ? `${num} is even.` : `${num} is odd.`;
}

function calculateArea(width: number, height: number): number {
    return width * height;
}

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

// Using the functions and displaying their outputs
console.log("Sum:", add(5, 10));
console.log("Check for even or odd:", checkEvenOrOdd(7));
console.log("Area of a rectangle with width and height :", calculateArea(4, 5));
console.log("Reverse 'Hello World!':", reverseString("!dlroW olleH"));
console.log("Conversion of Celsius to Fahrenheit:", convertCelsiusToFahrenheit(20));
