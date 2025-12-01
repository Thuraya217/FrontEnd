class Engineer extends User {
    constructor(name, age, id, title, departmentId, salary, workingHours) {
        super(name, age, id, title, departmentId, salary, workingHours);
    }
}

let eng1 = new Engineer ("Thuraiya", 25, 12345678, "Testing", 12, 2500, 6);



document.getElementById("name").textContent = "Name: " + eng1.name;
document.getElementById("title").textContent = "Title: " + eng1.title;
document.getElementById("age").textContent = "Age: " + eng1.age;
document.getElementById("depid").textContent = "Department ID: " + eng1.depid;
document.getElementById("salary").textContent = "Salary: " + eng1.salary;
document.getElementById("hours").textContent = "Working hours: " + eng1.workinghours;
