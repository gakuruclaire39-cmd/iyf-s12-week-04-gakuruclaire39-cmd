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
