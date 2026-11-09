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
