document.write("<br>")

document.write('<br>--------question 1 Declare and initialize an empty multidimensional array. (Array of arrays)  -------<br>')
document.write("<br>")
const numRows = 5;
const numCols = 3;

const myArray = new Array(numRows);

for (let i = 0; i < numRows; i++) {
  myArray[i] = new Array(numCols);
}

document.write("<br>")

document.write('<br>--------question 2  -------<br>')
document.write("<br>")

const matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
document.write (matrix)
document.write("<br>")

document.write('<br>--------question 3 Write a program to print numeric counting from 1 to 10. -------<br>')
document.write("<br>")

for (let i = 1; i <= 10; i++) {
    document.write(i);
  }
  
document.write("<br>")

document.write('<br>--------question  4 multiplication table-------<br>')
document.write("<br>")
const tableNumber = parseInt(prompt("Enter the table number you want table of:"));
const tableLength = parseInt(prompt("Enter the table length of table:"));

document.write(`Multiplication table of ${tableNumber} up to ${tableLength}:`);

for (let i = 1; i <= tableLength; i++) {
 document.write(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

document.write("<br>")

document.write('<br>--------question  5 Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] -------<br>')
document.write("<br>")

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("Fruits:");
for (let i = 0; i < fruits.length; i++) {
  document.write(fruits[i]);
}

document.write("<br>")

document.write('<br>--------question 6 -------<br>')
document.write("<br>")

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("Counting:");
for (let i = 1; i <= 15; i++) {
    document.write(i);
}
document.write("<br>")
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("Reverse counting:");
for (let i = 10; i >= 1; i--) {
    document.write(i);
}
document.write("<br>")
document.write("<br>")
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("Even:");
for (let i = 0; i <= 20; i += 2) {
    document.write(i);
}
document.write("<br>")
document.write("<br>")
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("Odd:");
for (let i = 1; i <= 19; i += 2) {
    document.write(i);
}
document.write("<br>")
document.write("<br>")
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("Series:");
for (let i = 2; i <= 20; i += 2) {
    document.write(`${i}k`);
}
document.write("<br>")

document.write("<br>")

document.write('<br>--------question 7  prompt the user whether the given item is found in the list or not. -------<br>')
document.write("<br>")

// Define the array to search
const Aa = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for input
const userInput = prompt("Enter the item you want to search for an array Q7 0f 17 ch :");

// Initialize a variable to track whether the item is found
let isFound = false;

// Search for the item in the array
for (let i = 0; i < Aa.length; i++) {
  if (Aa[i] === userInput) {
    isFound = true;
    break;
  }
}

// Output the result to the user
if (isFound) {
  alert(`${userInput} is found in the list!`);
} else {
  alert(`${userInput} is not found in the list.`);
}

document.write("<br>")

document.write('<br>--------question 8 Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12].  -------<br>')
document.write("<br>")
// Define the array to search
const Aaa = [24, 53, 78, 91, 12];

// Initialize a variable to hold the largest number
let max = Aaa[0];

// Find the largest number in the array
for (let i = 1; i < Aaa.length; i++) {
  if (Aaa[i] > max) {
    max = Aaa[i];
  }
}

// Output the result to the console
document.write(`The largest number in the array is: ${max}`);

document.write("<br>")

document.write('<br>--------question 9 Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]  -------<br>')
document.write("<br>")
// Define the array to search
const A = [24, 53, 78, 91, 12];

// Initialize a variable to hold the smallest number
let min = A[0];

// Find the smallest number in the array
for (let i = 1; i < A.length; i++) {
  if (A[i] < min) {
    min = A[i];
  }
}

// Output the result to the console
document.write(`The smallest number in the array is: ${min}`);

document.write("<br>")

document.write('<br>--------question 10 Write a program to print multiples of 5 ranging 1 to 100. -------<br>')
// Print multiples of 5 ranging from 1 to 100
for (let i = 1; i <= 20; i++) {
    document.write(i * 5);
  }
  
document.write("<br>")