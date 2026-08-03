// TypeScript Program to Implement Rest Parameters

// Function using Rest Parameters
function addNumbers(...numbers: number[]): number {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

// Function Calls
console.log("Sum of 2 numbers:", addNumbers(10, 20));
console.log("Sum of 4 numbers:", addNumbers(10, 20, 30, 40));
console.log("Sum of 6 numbers:", addNumbers(5, 10, 15, 20, 25, 30));