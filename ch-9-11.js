// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
document.write('<br>--------question 1 prompt city karachi -------<br>')
let city = prompt("Enter city name:");

if (city.toLowerCase() === "karachi") {
    document.write("Welcome to the city of lights");
}

document.write("<br>")
// Write a program to take “gender” as input from user. If the

// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
document.write('<br>--------question 2 greeting on genter -------<br>')
document.write("<br>")
let gender = prompt("Enter your gender:");

if (gender.toLowerCase() === "male") {
    document.write("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    document.write("Good Morning Ma'am");
} else {
    document.write("Invalid input");
}

document.write("<br>")
// Write a program to take input color of road traffic signal
// from the user & show the message


document.write('<br>--------question 3 trafic light -------<br>')
document.write("<br>")
let color = prompt("Enter the color of the traffic signal:");

if (color.toLowerCase() === "red") {
    document.write("The traffic signal is red. Stop!");
} else if (color.toLowerCase() === "yellow") {
    document.write("The traffic signal is yellow. Prepare to stop or go with caution.");
} else if (color.toLowerCase() === "green") {
    document.write("The traffic signal is green. Go!");
} else {
    document.write("Invalid input. Please enter either 'red', 'yellow', or 'green'.");
}

document.write("<br>")

// Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
document.write('<br>--------question 4 remaining fule -------<br>')
document.write("<br>")
// Get input from user
const remainingFuel = prompt("Enter remaining fuel in litres:");

// Check if fuel level is less than 0.25 litres
if (remainingFuel < 0.25) {
    document.write("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


document.write("<br>")
document.write('<br>--------question 5 script checking of alert -------<br>')
document.write("<br>")
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
    alert("car is smaller than cat");
    }



//     Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade
document.write("<br>")
document.write('<br>--------question 6 marksheet -------<br>')

document.write("<br>")
// Taking input of marks obtained in three subjects and total marks
var sub1 = Number(prompt("Enter marks obtained in Subject 1: "));
var sub2 = Number(prompt("Enter marks obtained in Subject 2: "));
var sub3 = Number(prompt("Enter marks obtained in Subject 3: "));
var totalMarks = Number(prompt("Enter total marks: "));

// Calculating total marks obtained
var obtainedMarks = sub1 + sub2 + sub3;

// Calculating percentage
var percentage = (obtainedMarks / totalMarks) * 100;

// Computing grade based on percentage
var grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}

// Showing the total marks, marks obtained, percentage, grade, and remarks
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
if (percentage >= 60) {
  document.write("Remarks: you done great");
} else {
  document.write("Remarks: you need to improve");
}
document.write("<br>")
document.write('<br>--------question 7. Guess game: -------<br>')
// 7. Guess game:
document.write("<br>")
// Generate a random secret number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
let guess = Number(prompt("Guess the secret number (between 1 and 10):"));

// Check if the guess is correct or close enough
if (guess === secretNumber) {
  document.write("Bingo! Correct answer.");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    document.write("Close enough to the correct answer.");
} else {
    document.write(`Sorry, the secret number was ${secretNumber}.`);
}



document.write("<br>")

document.write('<br>--------question 8. no.divisible by 3 -------<br>')
document.write("<br>")
// Prompt the user to enter a number
let number = Number(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    document.write(`${number} is divisible by 3.`);
} else {
    document.write(`${number} is not divisible by 3.`);
}


document.write("<br>")

document.write('<br>--------question 9. even or odd -------<br>')
document.write("<br>")

// Prompt the user to enter a number
let numbers = Number(prompt("Enter a number:"));

// Check if the number is even or odd
if (number % 2 === 0) {
    document.write(`${numbers} is an even number.`);
} else {
    document.write(`${numbers} is an odd number.`);
}

document.write("<br>")

document.write('<br>--------question 10 temperature alert -------<br>')
document.write("<br>")

// Prompt the user to enter the temperature in Celsius
let temperature = Number(prompt("Enter the temperature in Celsius:"));

// Show a message based on the temperature
if (temperature > 40) {
    document.write("It is too hot outside.");
} else if (temperature > 30) {
    document.write("The weather today is Normal.");
} else if (temperature > 20) {
    document.write("Today's weather is cool.");
} else {
    document.write("OMG! Today's weather is so Cool.");
}

document.write("<br>")

document.write('<br>--------question 11 calculator -------<br>')
document.write("<br>")


// Prompt the user to enter the first number
let num1 = Number(prompt("Enter the first number:"));

// Prompt the user to enter the second number
let num2 = Number(prompt("Enter the second number:"));

// Prompt the user to enter the operation to perform
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

// Perform the operation based on the user's input
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else if (operation === "%") {
  result = num1 % num2;
} else {
  document.write("Invalid operation.");
}

// Show the result to the user
document.write(`The result of ${num1} ${operation} ${num2} is ${result}.`);





 