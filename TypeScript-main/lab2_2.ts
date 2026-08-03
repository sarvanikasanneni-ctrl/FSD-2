// TypeScript Program to Implement Functions with Optional and Default Parameters

// Function with Optional Parameter
function displayStudent(name: string, age?: number): string {
    if (age !== undefined) {
        return `Student Name: ${name}, Age: ${age}`;
    }
    return `Student Name: ${name}`;
}

// Function with Default Parameter
function calculateSalary(name: string, bonus: number = 5000): string {
    return `${name}'s Total Bonus: ₹${bonus}`;
}

// Function Calls
console.log(displayStudent("Rahul"));
console.log(displayStudent("Priya", 20));

console.log(calculateSalary("Amit"));
console.log(calculateSalary("Sneha", 10000));