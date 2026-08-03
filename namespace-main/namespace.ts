// Create a namespace
namespace StudentInfo {

    export let college: string = "SVECW";

    export function display(name: string): void {
        console.log("Student Name: " + name);
        console.log("College: " + college);
    }

    export class Student {
        constructor(public rollNo: number) {}

        showRollNo(): void {
            console.log("Roll Number: " + this.rollNo);
        }
    }
}

// Use the namespace
StudentInfo.display("Adithi");

let s1 = new StudentInfo.Student(101);
s1.showRollNo();