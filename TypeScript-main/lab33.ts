class Student {
    public name: string;
    private age: number;
    protected course: string;

    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    showDetails(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}

class CollegeStudent extends Student {
    showCourse(): void {
        console.log("Course:", this.course); // Protected member is accessible
    }
}

let s1 = new CollegeStudent("Rahul", 20, "B.Tech");

console.log(s1.name);      // Public - Accessible
// console.log(s1.age);     // Error - Private
// console.log(s1.course);  // Error - Protected

s1.showDetails();
s1.showCourse();