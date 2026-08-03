// TypeScript program to implement functions with parameter types and return types

// Function Declaration
function add(a: number, b: number): number {
  return a + b;
}

// Function Expression
const subtract = function (a: number, b: number): number {
  return a - b;
};

// Arrow Function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Function Returning Boolean
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Function Returning String
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function Returning Void
function display(message: string): void {
  console.log(message);
}

// Function with Optional Parameter
function introduce(name: string, age?: number): string {
  return age ? `${name} is ${age} years old.` : `${name}'s age is not provided.`;
}

// Function with Default Parameter
function power(base: number, exponent: number = 2): number {
  return base ** exponent;
}

// Function with Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Main Program
console.log("Addition:", add(10, 20));
console.log("Subtraction:", subtract(20, 10));
console.log("Multiplication:", multiply(5, 6));
console.log("Is Even:", isEven(8));
console.log(greet("Alice"));
display("Welcome to TypeScript!");
console.log(introduce("Bob"));
console.log(introduce("Charlie", 25));
console.log("Power:", power(5));
console.log("Power:", power(2, 3));
console.log("Sum:", sum(1, 2, 3, 4, 5));