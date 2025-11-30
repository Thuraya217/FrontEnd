class Engineer extends User {
    constructor(name, age, id, title, departmentId, salary, workingHours) {
        super(name, age, id, title, departmentId, salary, workingHours);
    }
}

let eng1 = new Engineer ("Thuraiya", 25, 12345678, "Testing", 12, 2500, 6);

console.log(eng1);