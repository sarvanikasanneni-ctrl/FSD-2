
function add(a: number, b: number): number {
    return a + b;
}

console.log("Addition:", add(10, 20));



function greet(name: string, city?: string): void {
    if (city) {
        console.log("Hello " + name + " from " + city);
    } else {
        console.log("Hello " + name);
    }
}

greet("Sarvani");
greet("Sarvani", "Hyderabad");



function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log("Multiply:", multiply(5));
console.log("Multiply:", multiply(5, 4));



function total(...numbers: number[]): number {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log("Total:", total(10, 20, 30, 40));



const square = (num: number): number => {
    return num * num;
};

console.log("Square:", square(6));