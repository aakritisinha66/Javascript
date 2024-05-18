const employee = {
    calculateTax(){
        console.log("Tax rate is 10%");
    }
}

const student = {
    name: "ABC",
    salary: "50000",
    calculateSalary(){
        console.log("Salary is: ", this.salary);
    },
    calculateTax(){
        console.log("Tax rate is 18%");  //This will take precedence over prototype
    }
}

student.__proto__ = employee;
student.calculateTax();
student.calculateSalary();