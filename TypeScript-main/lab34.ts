// TypeScript Program to Demonstrate readonly and static Members

class Student {
    readonly id: number;
    static college: string = "ABC College";

    constructor(id: number) {
        this.id = id;
    }

    display(): void {
        console.log("ID:", this.id);
        console.log("College:", Student.college);
    }
}

let s = new Student(101);
s.display();