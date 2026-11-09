// ======================================
// WEEK 4: JAVASCRIPT FUNDAMENTALS
// STUDENT: CLAIRE GAKURU
// ======================================

// TASK 7.1: VARIABLES

let myName = "Claire Gakuru";
let myAge = 19;
let isStudent = true;

const favoriteColors = ["Black", "Blue", "Pink"];
const today = new Date();

console.log("My name:", myName);
console.log("My age:", myAge);
console.log("Student:", isStudent);
console.log("Favourite colours:", favoriteColors);
console.log("Today's date:", today);

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isStudent);


// TASK 7.2: OPERATORS

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);

console.log("Greater than:", 5 > 3);
console.log("Equal:", 5 === 5);
console.log("AND:", true && true);
console.log("OR:", true || false);
console.log("NOT:", !true);

console.log("Age in days:", myAge * 365);
console.log("Age in hours:", myAge * 365 * 24);

console.log(
    "Year turning 100:",
    new Date().getFullYear() + (100 - myAge)
);


// TASK 7.3: FUNCTIONS

function greet(name) {
    return `Hello, ${name}!`;
}

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(name) {
    return name.trim().split(/\s+/)
        .map(part => part[0])
        .join("")
        .toUpperCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}

console.log(greet("Claire"));
console.log(calculateArea(10, 5));
console.log(celsiusToFahrenheit(25));
console.log(isEven(19));
console.log(getInitials("Claire Gakuru"));
console.log(reverseString("Claire"));
console.log(calculateTip(1000));


// TASK 7.4: CONTROL FLOW

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function getDayName(day) {
    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    return days[day] || "Invalid day";
}

console.log(getGrade(85));
console.log(getDayName(1));

// Print numbers 1-100

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Even numbers

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
}

// FizzBuzz

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Star triangle

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


// ======================================
// MINI-PROJECT 1: CALCULATOR
// ======================================

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero!";
    }

    return num1 / num2;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            return num2 === 0
                ? "Cannot calculate remainder by zero!"
                : num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Invalid operator!";
    }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));
console.log(calculate(10, "%", 3));
console.log(calculate(10, "**", 2));


// ======================================
// LESSON 8: TASK 8.1 - ARRAYS
// ======================================

const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["Hello", 42, true, null];

console.log("First fruit:", fruits[0]);
console.log("Array length:", fruits.length);

fruits.push("grape");
fruits.unshift("mango");
fruits.pop();
fruits.shift();

console.log("Updated fruits:", fruits);
console.log("Mixed array:", mixed);

// Array methods

numbers.forEach(num => console.log("Doubled:", num * 2));

const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even:", firstEven);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

console.log("Includes 3:", numbers.includes(3));

// Array challenges

const values = [2, 4, 6, 8, 10];
console.log("Doubled:", values.map(num => num * 2));

const values2 = [-5, 10, -2, 8, -9, 15];
console.log("Positive numbers:", values2.filter(num => num >= 0));

const values3 = [3, 7, 12, 18, 25];
console.log("First above 10:", values3.find(num => num > 10));

const values4 = [2, 3, 4, 5];
console.log("Product:", values4.reduce((total, num) => total * num, 1));


// ======================================
// TASK 8.2 - OBJECTS
// ======================================

const person = {
    firstName: "Claire",
    lastName: "Gakuru",
    age: 19,
    isStudent: true,
    hobbies: ["learning", "coding", "reading"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log("First name:", person.firstName);
console.log("Last name:", person["lastName"]);
console.log("City:", person.address.city);

person.age = 20;
person.phone = "0700000000";

console.log("Updated person:", person);

const practiceCalculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    }
};

console.log(practiceCalculator.add(5, 3));
console.log(practiceCalculator.subtract(10, 4));
console.log(practiceCalculator.multiply(5, 3));

const scores = {
    mathematics: 85,
    english: 90,
    science: 88
};

console.log("Keys:", Object.keys(scores));
console.log("Values:", Object.values(scores));
console.log("Entries:", Object.entries(scores));

for (const [subject, mark] of Object.entries(scores)) {
    console.log(`${subject}: ${mark}`);
}


// ======================================
// TASK 8.3 - ARRAY OF OBJECTS
// ======================================

const practiceStudents = [
    { name: "Claire Gakuru", age: 19, grade: 85, major: "Computer Science" },
    { name: "Brian Kamau", age: 20, grade: 72, major: "Mathematics" },
    { name: "Mary Wanjiku", age: 23, grade: 90, major: "Computer Science" },
    { name: "Peter Mwangi", age: 21, grade: 88, major: "Physics" },
    { name: "Faith Achieng", age: 22, grade: 95, major: "Computer Science" }
];

const names = practiceStudents.map(student => student.name);
console.log("Student names:", names);

const highAchievers = practiceStudents.filter(student => student.grade > 80);
console.log("High achievers:", highAchievers);

const claire = practiceStudents.find(
    student => student.name === "Claire Gakuru"
);
console.log("Claire:", claire);

const avgGrade = practiceStudents.reduce(
    (total, student) => total + student.grade, 0
) / practiceStudents.length;

console.log("Average grade:", avgGrade);

const csMajors = practiceStudents.filter(
    student => student.major === "Computer Science"
);
console.log("Computer Science majors:", csMajors);

const sortedByGrade = [...practiceStudents].sort(
    (a, b) => b.grade - a.grade
);
console.log("Sorted students:", sortedByGrade);

console.log(
    "Has student above 90:",
    practiceStudents.some(student => student.grade > 90)
);

console.log(
    "All students passing:",
    practiceStudents.every(student => student.grade >= 60)
);


// ======================================
// TASK 8.4 - JSON
// ======================================

const json = '{"name":"Claire Gakuru","grades":{"math":88,"english":92}}';

const parsedStudent = JSON.parse(json);

console.log("Student:", parsedStudent.name);
console.log("Math:", parsedStudent.grades.math);

const backToText = JSON.stringify(parsedStudent, null, 2);

console.log("JSON text:", backToText);
console.log("Data type:", typeof backToText);


// JSON POSTS EXERCISE

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

const posts = JSON.parse(postsJson);

const publishedPosts = posts.filter(post => post.published);

const sortedPosts = [...publishedPosts].sort(
    (a, b) => b.likes - a.likes
);

const postMessages = sortedPosts.map(
    post => `${post.title} (${post.likes} likes)`
);

const filteredJson = JSON.stringify(sortedPosts, null, 2);

console.log("Published posts:", publishedPosts);
console.log("Sorted posts:", sortedPosts);
console.log("Post messages:", postMessages);
console.log("Filtered JSON:", filteredJson);


// ======================================
// MINI-PROJECT: STUDENT GRADE TRACKER
// ======================================

const gradeTracker = {

    students: [],

    addStudent(name, grades) {
        name = name.trim();

        if (!name || this.getStudent(name)) {
            return false;
        }

        const marks = Object.values(grades);

        if (
            marks.length === 0 ||
            marks.some(mark =>
                !Number.isFinite(mark) || mark < 0 || mark > 100
            )
        ) {
            return false;
        }

        this.students.push({
            name: name,
            grades: { ...grades }
        });

        return true;
    },

    getStudent(name) {
        return this.students.find(
            student =>
                student.name.toLowerCase() === name.trim().toLowerCase()
        ) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) return null;

        const marks = Object.values(student.grades);

        const total = marks.reduce((sum, mark) => sum + mark, 0);

        return Number((total / marks.length).toFixed(2));
    },

    getSubjectAverage(subject) {
        const marks = this.students
            .filter(student => student.grades[subject] !== undefined)
            .map(student => student.grades[subject]);

        if (marks.length === 0) return null;

        const total = marks.reduce((sum, mark) => sum + mark, 0);

        return Number((total / marks.length).toFixed(2));
    },

    getTopStudent() {
        if (this.students.length === 0) return null;

        return this.students.reduce((top, student) => {
            return this.getStudentAverage(student.name) >
                this.getStudentAverage(top.name) ? student : top;
        });
    },

    getStrugglingStudents() {
        return this.students.filter(
            student => this.getStudentAverage(student.name) < 70
        );
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) return `Student ${name} not found!`;

        const average = this.getStudentAverage(name);

        let report = "===== REPORT CARD =====\n";
        report += `Student: ${student.name}\n`;
        report += "-----------------------\n";

        for (const [subject, mark] of Object.entries(student.grades)) {
            report += `${subject}: ${mark}% (${this.getLetterGrade(mark)})\n`;
        }

        report += "-----------------------\n";
        report += `Average: ${average}%\n`;
        report += `Overall Grade: ${this.getLetterGrade(average)}\n`;
        report += "=======================";

        return report;
    }
};


// Test grade tracker

gradeTracker.addStudent("Claire Gakuru", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Brian Kamau", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Mary Wanjiku", {
    math: 60,
    english: 65,
    science: 58
});

console.log("Claire average:", gradeTracker.getStudentAverage("Claire Gakuru"));
console.log("Math average:", gradeTracker.getSubjectAverage("math"));
console.log("Top student:", gradeTracker.getTopStudent().name);
console.log("Struggling students:", gradeTracker.getStrugglingStudents());
console.log("Report card:", gradeTracker.generateReportCard("Claire Gakuru"));


// ======================================
// PART 3: CONNECT JAVASCRIPT TO HTML
// ======================================


// 1. CALCULATOR FUNCTIONALITY

document.getElementById("calculator-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const num1 = Number(
            document.getElementById("number-one").value
        );

        const num2 = Number(
            document.getElementById("number-two").value
        );

        const operator = document.getElementById("operator").value;

        const result = calculate(num1, operator, num2);

        document.getElementById("calculator-result").textContent =
            "Result: " + result;
    });


// ======================================
// 2. ADD STUDENT FUNCTIONALITY
// ======================================

document.getElementById("student-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById(
            "new-student-name"
        ).value.trim();

        const grades = {
            math: Number(
                document.getElementById("new-student-math").value
            ),

            english: Number(
                document.getElementById("new-student-english").value
            ),

            science: Number(
                document.getElementById("new-student-science").value
            )
        };

        const added = gradeTracker.addStudent(name, grades);

        const message = document.getElementById(
            "add-student-message"
        );

        if (added) {

            message.textContent =
                name + " has been added successfully!";

            document.getElementById("student-form").reset();

            displayStudents();

        } else {

            message.textContent =
                "Student already exists or grades are invalid!";
        }
    });


// ======================================
// 3. SEARCH STUDENT AVERAGE
// ======================================

document.getElementById("search-student-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById(
            "search-student-name"
        ).value.trim();

        const average = gradeTracker.getStudentAverage(name);

        const result = document.getElementById("student-result");

        if (average === null) {

            result.textContent = "Student not found!";

        } else {

            result.textContent =
                name + "'s average is " + average + "%";
        }

        result.style.whiteSpace = "pre-wrap";
    });


// ======================================
// 4. GENERATE REPORT CARD
// ======================================

document.getElementById("show-report-card")
    .addEventListener("click", function() {

        const name = document.getElementById(
            "search-student-name"
        ).value.trim();

        const report = gradeTracker.generateReportCard(name);

        const result = document.getElementById("student-result");

        result.textContent = report;

        result.style.whiteSpace = "pre-wrap";
    });


// ======================================
// 5. MATH CLASS AVERAGE
// ======================================

document.getElementById("show-subject-average")
    .addEventListener("click", function() {

        const average = gradeTracker.getSubjectAverage("math");

        document.getElementById("class-average").textContent =

            average === null
                ? "No mathematics grades available."
                : "Math class average: " + average + "%";
    });


// ======================================
// 6. TOP STUDENT
// ======================================

document.getElementById("show-top-student")
    .addEventListener("click", function() {

        const topStudent = gradeTracker.getTopStudent();

        document.getElementById("top-student").textContent =

            topStudent
                ? "Top student: " + topStudent.name
                : "No students available.";
    });


// ======================================
// 7. STRUGGLING STUDENTS
// ======================================

document.getElementById("show-struggling-students")
    .addEventListener("click", function() {

        const struggling = gradeTracker.getStrugglingStudents();

        document.getElementById("struggling-students").textContent =

            struggling.length > 0

                ? "Students needing help: " +
                  struggling.map(student => student.name).join(", ")

                : "No students are currently struggling.";
    });


// ======================================
// 8. DISPLAY ALL STUDENTS
// ======================================

function displayStudents() {

    const studentList = document.getElementById("student-list");

    studentList.innerHTML = "";

    if (gradeTracker.students.length === 0) {

        studentList.textContent = "No students have been added yet.";

        return;
    }

    gradeTracker.students.forEach(function(student) {

        const li = document.createElement("li");

        const average = gradeTracker.getStudentAverage(student.name);

        li.textContent =
            student.name + " - Average: " + average + "%";

        studentList.appendChild(li);
    });
}


// ======================================
// 9. SHOW STUDENTS BUTTON
// ======================================

document.getElementById("show-students")
    .addEventListener("click", function() {

        displayStudents();

    });



// ======================================
// PROJECT COMPLETED
// ======================================

console.log("================================");
console.log("WEEK 4 PROJECT LOADED SUCCESSFULLY");
console.log("Calculator is connected!");
console.log("Student Grade Tracker is connected!");
console.log("================================");

displayStudents();


/*
========================================
WEEK 4: JAVASCRIPT FUNDAMENTALS
DAILY CHALLENGES – DAY 1 TO DAY 5
========================================
*/


// ======================================
// DAY 1: FIZZBUZZ 🟢
// ======================================

console.log("========== DAY 1: FIZZBUZZ ==========");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// ======================================
// DAY 2: REVERSE A STRING 🟢
// ======================================

console.log("========== DAY 2: REVERSE A STRING ==========");

// Approach 1: Using built-in methods

function reverseStringBuiltIn(str) {
    return str.split("").reverse().join("");
}

console.log("Using built-in methods:");
console.log(reverseStringBuiltIn("hello"));
console.log(reverseStringBuiltIn("JavaScript"));
console.log(reverseStringBuiltIn("student"));

// Approach 2: Using a loop

function reverseStringLoop(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log("Using a loop:");
console.log(reverseStringLoop("hello"));
console.log(reverseStringLoop("JavaScript"));
console.log(reverseStringLoop("student"));


// ======================================
// DAY 3: FIND LARGEST NUMBER 🟢
// ======================================

console.log("========== DAY 3: FIND LARGEST NUMBER ==========");

// Approach 1: Using a loop

function findLargestLoop(numbers) {
    if (numbers.length === 0) {
        return "Array is empty";
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

console.log("Using a loop:");
console.log(findLargestLoop([12, 45, 7, 89, 23]));
console.log(findLargestLoop([5, 10, 2, 30, 15]));
console.log(findLargestLoop([-10, -5, -20]));

// Approach 2: Using reduce()

function findLargestReduce(numbers) {
    if (numbers.length === 0) {
        return "Array is empty";
    }

    return numbers.reduce((largest, current) => {
        return current > largest ? current : largest;
    });
}

console.log("Using reduce():");
console.log(findLargestReduce([12, 45, 7, 89, 23]));
console.log(findLargestReduce([5, 10, 2, 30, 15]));


// ======================================
// DAY 4: REMOVE DUPLICATES 🟡
// ======================================

console.log("========== DAY 4: REMOVE DUPLICATES ==========");

// Approach 1: Using Set

function removeDuplicatesSet(numbers) {
    return [...new Set(numbers)];
}

console.log("Using Set:");
console.log(removeDuplicatesSet([1, 2, 2, 3, 4, 4, 5]));

// Approach 2: Using filter()

function removeDuplicatesFilter(numbers) {
    return numbers.filter((number, index) => {
        return numbers.indexOf(number) === index;
    });
}

console.log("Using filter():");
console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5]));


// ======================================
// DAY 5: PALINDROME CHECKER 🟡
// ======================================

console.log("========== DAY 5: PALINDROME CHECKER ==========");

function isPalindrome(str) {

    // Convert the string to lowercase
    let cleaned = str.toLowerCase();

    // Remove spaces and special characters
    cleaned = cleaned.replace(/[^a-z0-9]/g, "");

    // Reverse the cleaned string
    let reversed = cleaned.split("").reverse().join("");

    // Compare the original and reversed strings
    return cleaned === reversed;
}

// Test the function

console.log(isPalindrome("racecar")); 
// true

console.log(isPalindrome("hello")); 
// false

console.log(isPalindrome("A man a plan a canal Panama")); 
// true

console.log(isPalindrome("Madam")); 
// true

console.log(isPalindrome("JavaScript")); 
// false


// ======================================
// END OF WEEK 4 DAILY CHALLENGES
// ======================================

console.log("========== ALL 5 DAILY CHALLENGES COMPLETED! ==========");
