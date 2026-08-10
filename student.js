const studentName = "McBright";
const mathematics = 15;
const computerScience = 18;
const database = 14;
const feesPaid = true;
const attendance = 80;
const total = mathematics + computerScience + database;
const average = total / 3;

console.log("Student:", studentName);
console.log("Total:", total);
console.log("Average:", average);

if (average >= 16) {
    console.log("Grade: Excellent");
} else if (average >= 14) {
    console.log("Grade: Very Good");
} else if (average >= 12) {
    console.log("Grade: Good");
} else if (average >= 10) {
    console.log("Grade: Pass");
} else {
    console.log("Grade: Fail");
}

const eligible = average >= 10 && feesPaid && attendance >= 75;

if (eligible) {
    console.log("Eligible: Yes");
} else {
    console.log("Eligible: No");
}

const students = [
    { name: "John", average: 15 },
    { name: "Mary", average: 18 },
    { name: "Paul", average: 9 },
    { name: "Sarah", average: 12 }
];

for (const student of students) {
    if (student.average>= 10) {
        console.log(student.name + " - passed");
    } else {
        console.log(student.name + " - failed");
    }
}