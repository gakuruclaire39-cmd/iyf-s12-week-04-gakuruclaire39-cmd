// LESSON 7: JAVASCRIPT BASICS

// 1. Variable declarations
let myName = "Claire Gakuru";
let myAge = 19;
let isStudent = true;

// 2. Favourite colours (Array)
let favoriteColors = ["Black","Blue","Pink"];

// 3. Today's date
let today = new Date();

// 4. Displaying my personal information
console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favourite colour is:", favoriteColors);
console.log("Today's date is:", today);

// 5. Checking data types
console.log("Name data type:", typeof myName);
console.log("Age data type:", typeof myAge);
console.log("Student status data type:", typeof isStudent);

// 6. Practising let
let score = 100;

score = 150;

console.log("My updated score is:", score);

// 7. Practising const
const PI = 3.14159;

console.log("The value of PI is:", PI);

// END OF LESSON 7 TASK 7.1


// TASK 7.2 - EXERCISE 1: NUMBER OPERATIONS

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment and Decrement
let count = 0;

count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);


// TASK 7.2 - EXERCISE 2: STRING OPERATIONS

let firstName = "Claire";
let lastName = "Gakuru";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals
let greeting = `Hello, ${firstName}!`;

let message = `${firstName} has ${firstName.length} letters.`;

// String methods
console.log("Full name:", fullName);
console.log("Greeting:", greeting);
console.log("Message:", message);

console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First letter:", firstName.charAt(0));
console.log("Includes Claire:", fullName.includes("Claire"));


// TASK 7.2 - EXERCISE 3: COMPARISON OPERATORS

console.log("5 is greater than 3:", 5 > 3);
console.log("5 is less than 3:", 5 < 3);
console.log("5 is equal to 5:", 5 === 5);
console.log("5 == '5':", 5 == "5");
console.log("5 is not equal to 3:", 5 !== 3);

// LOGICAL OPERATORS

console.log("AND:", true && true);
console.log("OR:", true || false);
console.log("NOT:", !true);


// TASK 7.2 - AGE CHALLENGE

let myName = "Claire Gakuru";
let myAge = 19;

// Approximate age calculations
let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;

// Year you will turn 100
let currentYear = new Date().getFullYear();
let yearTurning100 = currentYear + (100 - myAge);

console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("My age in approximately days:", ageInDays);
console.log("My age in approximately hours:", ageInHours);
console.log("I will turn 100 in:", yearTurning100);


// TASK 7.3: EXERCISE 1 - FUNCTION DECLARATIONS

// 1. Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Claire"));

// 2. Function expression
const add = function(a, b) {
    return a + b;
};

console.log("Addition:", add(10, 5));

// 3. Arrow function
const multiply = (a, b) => a * b;

console.log("Multiplication:", multiply(4, 5));

// 4. Arrow function with a body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log("Division:", divide(20, 4));


// TASK 7.3: EXERCISE 2 - BUILD FUNCTIONS

// 1. Calculate area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

console.log("Rectangle area:", calculateArea(10, 5));


// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log("Temperature:", celsiusToFahrenheit(25), "°F");


// 3. Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

console.log("Is 19 even?", isEven(19));


// 4. Get initials from full name
function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(name => name[0])
        .join("")
        .toUpperCase();
}

console.log("My initials:", getInitials("Claire Gakuru"));


// 5. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("My name reversed:", reverseString("Claire"));


// TASK 7.3: EXERCISE 3 - DEFAULT PARAMETERS

function greetWithDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault());

console.log(greetWithDefault("Claire"));

console.log(greetWithDefault("Claire", "Welcome"));


// TASK 7.3: EXERCISE 4 - TIP CALCULATOR

function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

// Calculate tip using default 15%
console.log("Tip for KSh 1000:", calculateTip(1000));

// Calculate tip using 20%
console.log("Tip for KSh 2000:", calculateTip(2000, 20));

// Calculate tip using 10%
console.log("Tip for KSh 500:", calculateTip(500, 10));


// TASK 7.4 - EXERCISE 1: IF/ELSE STATEMENTS

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Testing the function
console.log("My grade:", getGrade(85));
console.log("Student grade:", getGrade(95));
console.log("Another grade:", getGrade(55));


// TASK 7.4 - EXERCISE 2: SWITCH STATEMENTS

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log("Today is:", getDayName(1));
console.log("Day number 5:", getDayName(5));
console.log("Day number 8:", getDayName(8));


// FOR LOOP

for (let i = 0; i < 5; i++) {
    console.log("For loop:", i);
}


// WHILE LOOP

let count = 0;

while (count < 5) {
    console.log("While loop:", count);
    count++;
}


// FOR...OF LOOP

const colors = ["Black", "White", "Blue"];

for (const color of colors) {
    console.log("My favourite colours:", color);
}


// PRINT NUMBERS FROM 1 TO 100

console.log("Numbers from 1 to 100:");

for (let i = 1; i <= 100; i++) {
    console.log(i);
}


// PRINT EVEN NUMBERS FROM 1 TO 50

console.log("Even numbers from 1 to 50:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// FIZZBUZZ CHALLENGE

console.log("FizzBuzz:");

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


// STAR TRIANGLE CHALLENGE

console.log("My Star Triangle:");

for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}


// =====================================
// WEEK 4 MINI-PROJECT: CALCULATOR
// Created by: Claire Gakuru
// =====================================

// 1. Addition
function add(a, b) {
    return a + b;
}

// 2. Subtraction
function subtract(a, b) {
    return a - b;
}

// 3. Multiplication
function multiply(a, b) {
    return a * b;
}

// 4. Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }

    return a / b;
}

// 5. Main calculator function
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
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Invalid operator!";
    }
}

// 6. Testing the calculator

console.log("===== CLAIRE'S CALCULATOR =====");

console.log("Addition:", calculate(10, "+", 5));

console.log("Subtraction:", calculate(10, "-", 5));

console.log("Multiplication:", calculate(10, "*", 5));

console.log("Division:", calculate(10, "/", 5));

console.log("Division by zero:", calculate(10, "/", 0));

console.log("Modulus:", calculate(10, "%", 3));

console.log("Power:", calculate(10, "**", 2));

console.log("Invalid operator:", calculate(10, "&", 5));

console.log("===== CALCULATOR COMPLETE =====");


// ======================================
// TASK 8.1 - EXERCISE 1: ARRAY BASICS
// Created by: Claire Gakuru
// ======================================

// Creating arrays
const fruits = ["apple", "banana", "orange"];

const numbers = [1, 2, 3, 4, 5];

const mixed = ["Hello", 42, true, null];

// My favourite colour
const favoriteColors = ["Black"];

// Accessing array elements
console.log("First fruit:", fruits[0]);

console.log("Number of fruits:", fruits.length);

console.log("My favourite colour:", favoriteColors[0]);

// Modifying arrays
fruits.push("grape");

console.log("After push:", fruits);

fruits.unshift("mango");

console.log("After unshift:", fruits);

fruits.pop();

console.log("After pop:", fruits);

fruits.shift();

console.log("After shift:", fruits);

// Display mixed array
console.log("Mixed array:", mixed);


// ======================================
// TASK 8.1 - EXERCISE 2: ARRAY METHODS
// ======================================

const numbers = [1, 2, 3, 4, 5];

// 1. forEach - display each number multiplied by 2
numbers.forEach(num => {
    console.log("Doubled:", num * 2);
});

// 2. map - create a new array with doubled numbers
const doubled = numbers.map(num => num * 2);

console.log("Doubled array:", doubled);

// 3. filter - get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even numbers:", evenNumbers);

// 4. find - get the first even number
const firstEven = numbers.find(num => num % 2 === 0);

console.log("First even number:", firstEven);

// 5. reduce - calculate the sum
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Sum of numbers:", sum);

// 6. includes - check if a number exists
console.log("Does the array include 3?", numbers.includes(3));


// CHALLENGE 1: DOUBLE ALL NUMBERS

const values = [2, 4, 6, 8, 10];

const doubledValues = values.map(num => num * 2);

console.log("Original numbers:", values);

console.log("Doubled numbers:", doubledValues);


// CHALLENGE 2: FILTER NEGATIVE NUMBERS

const values2 = [-5, 10, -2, 8, -9, 15];

const positiveNumbers = values2.filter(num => num >= 0);

console.log("Original numbers:", values2);

console.log("Non-negative numbers:", positiveNumbers);


// CHALLENGE 3: FIND FIRST NUMBER GREATER THAN 10

const values3 = [3, 7, 12, 18, 25];

const firstGreaterThan10 = values3.find(num => num > 10);

console.log("First number greater than 10:", firstGreaterThan10);


// CHALLENGE 4: PRODUCT OF ALL NUMBERS

const values4 = [2, 3, 4, 5];

const product = values4.reduce((total, num) => total * num, 1);

console.log("Numbers:", values4);

console.log("Product of all numbers:", product);


// ======================================
// TASK 8.2 - EXERCISE 1: OBJECT BASICS
// Created by: Claire Gakuru
// ======================================

// Creating my personal object
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

// Accessing object properties

// Dot notation
console.log("First name:", person.firstName);

// Bracket notation
console.log("Last name:", person["lastName"]);

// Accessing nested objects
console.log("My city:", person.address.city);

// Accessing hobbies
console.log("My hobbies:", person.hobbies);

// Modifying properties
person.age = 20;

console.log("Updated age:", person.age);

// Adding a new property
person.phone = "0700000000";

console.log("Phone number:", person.phone);

// Removing a property
delete person.isStudent;

console.log("Updated person object:", person);


// ======================================
// TASK 8.2 - EXERCISE 2: OBJECT METHODS
// ======================================

const calculator = {

    // Function expression
    add: function(a, b) {
        return a + b;
    },

    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },

    // Arrow function
    multiply: (a, b) => a * b,

    // Division method
    divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }

        return a / b;
    }
};

// Testing calculator methods

console.log("Addition:", calculator.add(5, 3));

console.log("Subtraction:", calculator.subtract(10, 4));

console.log("Multiplication:", calculator.multiply(5, 3));

console.log("Division:", calculator.divide(20, 4));

console.log("Division by zero:", calculator.divide(10, 0));


// ======================================
// TASK 8.2 - EXERCISE 3: OBJECT ITERATION
// ======================================

// Creating a scores object
const scores = {
    mathematics: 85,
    english: 90,
    science: 88
};

// 1. Get object keys
console.log("Subjects:", Object.keys(scores));

// 2. Get object values
console.log("Marks:", Object.values(scores));

// 3. Get object entries
console.log("Subject entries:", Object.entries(scores));

// 4. Loop through the object
for (const [subject, score] of Object.entries(scores)) {

    console.log(`${subject}: ${score}`);
}


// BONUS EXERCISE: MY STUDENT OBJECT

const myStudent = {
    name: "Claire Gakuru",
    age: 19,
    course: "JavaScript Fundamentals",
    marks: {
        mathematics: 85,
        english: 90,
        science: 88
    },

    // Calculate average marks
    calculateAverage() {
        const marks = Object.values(this.marks);

        const total = marks.reduce((sum, mark) => sum + mark, 0);

        return total / marks.length;
    }
};

console.log("Student name:", myStudent.name);

console.log("Course:", myStudent.course);

console.log("My marks:", myStudent.marks);

console.log("Average marks:", myStudent.calculateAverage());


// ==========================================
// TASK 8.3: ARRAY OF OBJECTS
// Created by: Claire Gakuru
// ==========================================

// Creating an array of student objects

const students = [
    { name: "Claire Gakuru", age: 19, grade: 85, major: "Computer Science" },
    { name: "Brian Kamau", age: 20, grade: 72, major: "Mathematics" },
    { name: "Mary Wanjiku", age: 23, grade: 90, major: "Computer Science" },
    { name: "Peter Mwangi", age: 21, grade: 88, major: "Physics" },
    { name: "Faith Achieng", age: 22, grade: 95, major: "Computer Science" }
];

// 1. Get all student names
const names = students.map(student => student.name);

console.log("All student names:", names);


// 2. Get students with grade greater than 80
const highAchievers = students.filter(student => student.grade > 80);

console.log("High achievers:", highAchievers);


// 3. Find the student named Claire Gakuru
const claire = students.find(student => student.name === "Claire Gakuru");

console.log("Student found:", claire);


// 4. Calculate average grade
const avgGrade = students.reduce(
    (total, student) => total + student.grade, 0
) / students.length;

console.log("Average grade:", avgGrade);


// 5. Get Computer Science majors only
const csMajors = students.filter(student => student.major === "Computer Science");

console.log("Computer Science students:", csMajors);


// 6. Sort students by grade (highest first)
const sortedByGrade = [...students].sort(
    (a, b) => b.grade - a.grade
);

console.log("Students sorted by grade:", sortedByGrade);


// 7. Check if any student has grade greater than 90
const hasTopStudent = students.some(student => student.grade > 90);

console.log("Is there a student above 90?", hasTopStudent);


// 8. Check if all students are passing
const allPassing = students.every(student => student.grade >= 60);

console.log("Are all students passing?", allPassing);


// END OF TASK 8.3


// ======================================
// TASK 8.4 - EXERCISE 1: JSON BASICS
// Created by: Claire Gakuru
// ======================================

// JSON string
const json = '{"name":"Claire Gakuru","grades":{"math":88,"english":92}}';

// Convert JSON text into a JavaScript object
const student = JSON.parse(json);

// Accessing object properties
console.log("Student name:", student.name);

console.log("Math grade:", student.grades.math);

console.log("English grade:", student.grades.english);

// Convert object back into JSON text
const backToText = JSON.stringify(student, null, 2);

console.log("JSON text:", backToText);

// Check data type
console.log("Data type:", typeof backToText);


// ======================================
// TASK 8.4 - EXERCISE 2: WORKING WITH JSON
// Created by: Claire Gakuru
// ======================================

// Original JSON string
const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// STEP 1: Parse JSON into an array
const posts = JSON.parse(postsJson);

console.log("All posts:", posts);


// STEP 2: Keep only published posts
const publishedPosts = posts.filter(post => post.published === true);

console.log("Published posts:", publishedPosts);


// STEP 3: Sort by likes (highest first)
const sortedPosts = [...publishedPosts].sort(
    (a, b) => b.likes - a.likes
);

console.log("Posts sorted by likes:", sortedPosts);


// STEP 4: Map posts into readable strings
const postMessages = sortedPosts.map(
    post => `${post.title} (${post.likes} likes)`
);

console.log("Post messages:", postMessages);


// STEP 5: Convert filtered array back to JSON text
const filteredJson = JSON.stringify(sortedPosts, null, 2);

console.log("Filtered JSON text:", filteredJson);


// STEP 6: Check the data type
console.log("JSON data type:", typeof filteredJson);


const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        // Prevent duplicate students
        if (this.getStudent(name)) {
            console.log(`${name} already exists!`);
            return;
        }

        this.students.push({
            name: name,
            grades: grades
        });
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find(
            student => student.name.toLowerCase() === name.toLowerCase()
        ) || null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) return null;

        const grades = Object.values(student.grades);

        if (grades.length === 0) return 0;

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    // Calculate class average for a subject
    getSubjectAverage(subject) {
        const grades = this.students
            .filter(student =>
                student.grades[subject] !== undefined
            )
            .map(student => student.grades[subject]);

        if (grades.length === 0) return null;

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;

        return this.students.reduce((top, student) => {
            return this.getStudentAverage(student.name) >
                   this.getStudentAverage(top.name)
                ? student
                : top;
        });
    },

    // Get students needing help (average below 70)
    getStrugglingStudents() {
        return this.students.filter(student =>
            this.getStudentAverage(student.name) < 70
        );
    },

    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) {
            return `Student ${name} not found!`;
        }

        const average = this.getStudentAverage(name);

        let report = `===== REPORT CARD =====\n`;
        report += `Student: ${student.name}\n`;
        report += `-----------------------\n`;

        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade}% (${this.getLetterGrade(grade)})\n`;
        }

        report += `-----------------------\n`;
        report += `Average: ${average}%\n`;
        report += `Overall Grade: ${this.getLetterGrade(average)}\n`;
        report += `=======================`;

        return report;
    }
};


// ===========================
// TEST YOUR IMPLEMENTATION
// ===========================

gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Charlie", {
    math: 60,
    english: 65,
    science: 58
});


// Test methods
console.log("Alice Average:");
console.log(gradeTracker.getStudentAverage("Alice"));

console.log("\nMath Class Average:");
console.log(gradeTracker.getSubjectAverage("math"));

console.log("\nTop Student:");
console.log(gradeTracker.getTopStudent().name);

console.log("\nStudents Needing Help:");
console.log(gradeTracker.getStrugglingStudents());

console.log("\nAlice Letter Grade:");
console.log(gradeTracker.getLetterGrade(
    gradeTracker.getStudentAverage("Alice")
));

console.log("\nAlice Report Card:");
console.log(gradeTracker.generateReportCard("Alice"));



