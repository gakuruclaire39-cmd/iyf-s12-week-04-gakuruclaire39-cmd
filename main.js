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

