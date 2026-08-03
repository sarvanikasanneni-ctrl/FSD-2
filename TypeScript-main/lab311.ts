// TypeScript Program to Demonstrate OOP
// Creating a Class with Properties and Methods

class Student {
    // Properties
    name: string;
    age: number;
    course: string;

    // Constructor
    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Method
    displayDetails(): void {
        console.log("Student Details");
        console.log("Name   :", this.name);
        console.log("Age    :", this.age);
        console.log("Course :", this.course);
    }

    // Method
    study(): void {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

// Creating Object
let student1 = new Student("Rahul", 20, "Computer Science");

// Calling Methods
student1.displayDetails();
student1.study();