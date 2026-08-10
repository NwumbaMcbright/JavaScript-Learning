const students = [
    { name: "John", average: 15 },
    { name: "Mary", average: 18 },
    { name: "Paul", average: 9 },
    { name: "Sarah", average: 12 }
];

// 1. Display all names
students.forEach((student) => {
    console.log(student.name);
});

// 2. Get all names
const names = students.map((student) => student.name);
console.log(names);

// 3. Get students who passed
const passed = students.filter((student) => student.average >= 10);
console.log(passed);

// 4. Find Mary
const mary = students.find((student) => student.name === "Mary");
console.log(mary);

// 5. Calculate total
const total = students.reduce((sum, student) => {
    return sum + student.average;
}, 0);

console.log("Total:", total);

// 6. Calculate class average
const classAverage = total / students.length;

console.log("Class Average:", classAverage);
