
const student = {
    name: "McBright",
    age: 23,
    school: "ABC College",

    results: {
        mathematics: 15,
        computerScience: 18,
        database: 14
    }
};

// Destructuring the object
const { name, age, school, results } = student;

// Destructuring the results
const { mathematics, computerScience, database } = results;

// Calculate total
const total = mathematics + computerScience + database;

// Calculate average
const average = total / 3;

// Create a new object using the spread operator
const studentReport = {
    ...student,
    total: total,
    average: average
};

// Display results
console.log("Name:", name);
console.log("Age:", age);
console.log("School:", school);
console.log("Total:", total);
console.log("Average:", average);

console.log("Student Report:");
console.log(studentReport);