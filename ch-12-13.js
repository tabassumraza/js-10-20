document.write("<br>")

document.write('<br>--------question 1 checking character -------<br>')
document.write("<br>")
let char = prompt("Enter a character:");
let charCode = char.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
  document.write("The input is a number");
} else if (charCode >= 65 && charCode <= 90) {
    document.write("The input is an uppercase letter");
} else if (charCode >= 97 && charCode <= 122) {
    document.write("The input is a lowercase letter");
} else {
    document.write("The input is not a number or a letter");
}


document.write("<br>")

document.write('<br>--------question 2 show greater integer -------<br>')
document.write("<br>")
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

if (num1 > num2) {
    document.write(num1 + " is larger than " + num2);
} else if (num2 > num1) {
    document.write(num2 + " is larger than " + num1);
} else {
    document.write("Both numbers are equal");
}

document.write("<br>")

document.write('<br>--------question 3 positive or negative number-------<br>')
document.write("<br>")


let number = parseInt(prompt("Enter a number to know where it is positive or negative: "));

if (number > 0) {
    document.write(number + " is a positive number");
} else if (number < 0) {
    document.write(number + " is a negative number");
} else {
    document.write("The number is zero");
}

document.write("<br>")

document.write('<br>--------question 4 vowel-------<br>')
document.write("<br>")

let chars = prompt("Enter a character: ");

if (chars === "a" || chars === "e" || chars === "i" || chars === "o" || chars === "u") {
    document.write(chars + " is a vowel");
} else {
    document.write(chars + " is not a vowel");
}



document.write("<br>")

document.write('<br>--------question 5 password correction-------<br>')
document.write("<br>")


let correctPassword = "password123";
let enteredPassword = prompt("Enter your password: ");

if (enteredPassword === "") {
    document.write("Please enter your password");
} else if (enteredPassword === correctPassword) {
    document.write("Correct! The password you entered matches the original password");
} else {
    document.write("Incorrect password");
}


document.write("<br>")

document.write('<br>--------question  6 fixing code -------<br>')
document.write("<br>")

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}




document.write("<br>")

document.write('<br>--------question 7 message according to time-------<br>')
document.write("<br>")

// Prompt the user to enter the time in 24-hour clock format
var time = prompt("Enter the time in 24-hour clock format (e.g. 1900 = 7pm):");

// Convert the input to a number
time = parseInt(time);

// Check if the time is between 0000 and 1159
if (time >= 0 && time <= 1159) {
    document.write("Good morning!");
}
// Check if the time is between 1200 and 1659
else if (time >= 1200 && time <= 1659) {
    document.write("Good afternoon!");
}
// Check if the time is between 1700 and 2359
else if (time >= 1700 && time <= 2359) {
    document.writeconsole.log("Good evening!");
}
// If the input is not a valid time, display an error message
else {
    document.write("Invalid time entered.");
}
