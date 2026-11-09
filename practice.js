
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
