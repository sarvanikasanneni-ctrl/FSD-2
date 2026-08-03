

class Employee {
   
    empId: number;
    empName: string;
    salary: number;

    
    constructor(empId: number, empName: string, salary: number) {
        this.empId = empId;
        this.empName = empName;
        this.salary = salary;
    }

    
    displayDetails(): void {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.empName);
        console.log("Salary:", this.salary);
    }
}
let emp1 = new Employee(101, "Rahul", 50000);
emp1.displayDetails();