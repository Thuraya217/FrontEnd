// Create Data for 5 Students 
let students = [
    { name: "Thuraiya", age: 25, grade: 90, city: "Oman" },
    { name: "Sara", age: 22, grade: 78, city: "Cairo" },
    { name: "Omar", age: 19, grade: 65, city: "Alex" },
    { name: "Noor", age: 21, grade: 48, city: "Oman" },
    { name: "Hassan", age: 23, grade: 82, city: "Alex" }
]
console.log(students);

// Function: Print Student Info
function printStudent(student) {
    console.log("Name: " + student.name);
    console.log("Age: " + student.age);
    console.log("Grade: " + student.grade);
    console.log("City: " + student.city);
}

for (var i = 0; i < students.length; i++) {
    printStudent(students[i]);
}

// Add a New Student
let newStudent = { name: "Lina", age: 15, grade: "10", city: "Oman" };
let updatedStudents = [...students, newStudent];
console.log(updatedStudents);

// Destructuring
const { name, grade } = students[0]; 
console.log ("Name: " + name + "Grade:" + grade);

// Conditions
function checkGrade(student) {

    console.log(`Student: ${student.name}`);

    if (student.grade >= 90) {
        console.log("Excellent");
    } else if (student.grade >= 75) {
        console.log("Good");
    } else if (student.grade >= 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
//switch statement to print a message depending on the student’s city
switch (student.city) {
    case "Cairo":
        console.log("City: Cairo");
        break;
    case "Alex":
        console.log("City: Alexandria");
        break;
    default:
        console.log("City: Other");
}
}

for(let i = 0; i < students.length; i++){
    checkGrade(students[i])
}

// Array Methods
// Add a student using push() 
students.push({ name: "Mona", age: 20, grade: 70, city: "Muscat" }); 
console.log(students)

// Remove the last student using pop() 
students.pop();
console.log(students);

// Add a student to the beginning using unshift() 
students.unshift({ name: "Khalid", age: 24, grade: 88, city: "Sohar" });
console.log(students);

// Remove the first student using shift() 
students.shift();
console.log(students);

// Create a new small array using slice() 
let smallArray = students.slice(1, 3); 
console.log(smallArray);

// Check if a student name exists using includes() (Hint: create an array of names only) 
// create an array that contains only the student names
let namesArray = students.map(student => student.name);

// search for name
console.log(namesArray.includes("Sara"));
console.log(namesArray.includes("Fatma"));
