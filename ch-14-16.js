document.write("<br>")

document.write('<br>--------question1 an empty array using JS literal notation to store student names in future. -------<br>')
document.write("<br>")

var studentNames = [];

document.write("<br>")

document.write('<br>--------question 2  Declare an empty array using JS object notation to store student names in future.-------<br>')
document.write("<br>")

var students = { names: [] };

document.write("<br>")

document.write('<br>--------question 3 Declare and initialize a strings array. -------<br>')
document.write("<br>")
var fruits = ['apple ','banana ','orange']
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i]);
  }
  

document.write("<br>")

document.write('<br>--------question  4. Declare and initialize a numbers array.-------<br>')
document.write("<br>")

var numbers = [1 , 2 , 3 , 4];
for (var i = 0; i < numbers.length; i++) {
  document.write(numbers[i]);
}

document.write("<br>")

document.write('<br>--------question 5 Declare and initialize a boolean array. -------<br>')
document.write("<br>")
var boolArray = [true  , false , true , false];
for (var i = 0; i < boolArray.length; i++) {
    document.write(boolArray[i]);
  }
document.write("<br>")

document.write('<br>--------question 6 Declare and initialize a mixed array.-------<br>')
document.write("<br>")
var mixedArray = ["apple ", 10 , true , ["dog ", "cat"]];
for (var i = 0; i < mixedArray.length; i++) {
    document.write(mixedArray[i]);
  }
  
document.write("<br>")

document.write('<br>--------question 7  store available education qualifications in Pakistan-------<br>')
document.write("<br>")
// Declare and initialize an array of education qualifications
const qualifications = ["SSC ", "HSC ", "BCS ", "BS ", "BCOM ", "MS ", "M. Phil. ", "PhD"];
// Display the list of qualifications in the browser console
document.write("List of available education qualifications in Pakistan:");
qualifications.forEach((qualification) => document.write(qualification));
document.write("<br>")

document.write('<br>--------question 8 store 3 student names in an array.Take another array to store score of these three students. -------<br>')
document.write("<br>")

// create arrays to store student names and scores
let names = ["Alice", "Bob", "Charlie"];
let scores = [430, 380, 490];
// calculate percentage for each student
let total_marks = 500;
let percentages = scores.map(score => score / total_marks * 100);
// display scores and percentages
for (let i = 0; i < names.length; i++) {
  document.write(`${names[i]} scored ${scores[i]} out of ${total_marks}, which is ${percentages[i].toFixed(2)}% `);
}

document.write("<br>")

document.write('<br>--------question 9 an array with color names. -------<br>')
document.write("<br>")

// Initialize array with color names
let colorArray = ["red", "orange", "yellow", "green", "blue", "purple"];

// Display array elements in browser
document.write("<h3>Initial Array:</h3>");
document.write(colorArray.join(", ") + "<br>");

// Add color to beginning of array
let newColorBeginning = prompt("Enter a color to add to the beginning of the array:");
colorArray.unshift(newColorBeginning);

// Display updated array in browser
document.write("<h3>Array with color added to beginning:</h3>");
document.write(colorArray.join(", ") + "<br>");

// Add color to end of array
let newColorEnd = prompt("Enter a color to add to the end of the array:");
colorArray.push(newColorEnd);

// Display updated array in browser
document.write("<h3>Array with color added to end:</h3>");
document.write(colorArray.join(", ") + "<br>");

// Add two more colors to beginning of array
colorArray.unshift("pink", "black");

// Display updated array in browser
document.write("<h3>Array with two more colors added to beginning:</h3>");
document.write(colorArray.join(", ") + "<br>");

// Delete first color in array
colorArray.shift();

// Display updated array in browser
document.write("<h3>Array with first color deleted:</h3>");
document.write(colorArray.join(", ") + "<br>");

// Delete last color in array
colorArray.pop();

// Display updated array in browser
document.write("<h3>Array with last color deleted:</h3>");
document.write(colorArray.join(", ") + "<br>");

// Add color to desired index
let indexToAdd = prompt("Enter the index where you want to add a color:");
let colorToAdd = prompt("Enter the color you want to add:");
colorArray.splice(indexToAdd, 0, colorToAdd);

// Display updated array in browser
document.write("<h3>Array with color added to desired index:</h3>");
document.write(colorArray.join(", ") + "<br>");

// Delete color(s) from desired index
let indexToDelete = prompt("Enter the index where you want to delete color(s):");
let numToDelete = prompt("Enter the number of colors you want to delete:");
colorArray.splice(indexToDelete, numToDelete);

// Display updated array in browser
document.write("<h3>Array with color(s) deleted from desired index:</h3>");
document.write(colorArray.join(", "));


document.write("<br>")

document.write('<br>--------question 10 student scores in an array & sort the array in ascending order using Array’s sort -------<br>')
document.write("<br>")
// create an array to store student scores
let score = [90, 80, 95, 75, 85];

// sort the array in ascending order using Array's sort method
score.sort((a, b) => a - b);

// print the sorted array to the console
document.write(score);


document.write("<br>")

document.write('<br>--------question 11 initialize an array with city names. Copy 3 array elements from cities array to selectedCities -------<br>')
document.write("<br>")

// initialize an array with city names
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

// create an empty array to store selected cities
let selectedCities = [];

// copy three elements from cities array to selectedCities array
selectedCities = cities.slice(1, 4);

// print both arrays to the console
document.write("Cities:", cities);
document.write("<br>")
document.write("Selected cities:", selectedCities);

document.write("<br>")


document.write('<br>--------question 12 -------<br>')
document.write("<br>")
// Initializing the array
var arr = ["This", "is", "my", "cat"];

// Using join method to create a single string
var str = arr.join(" ");

// Displaying the result
console.log(str);


document.write("<br>")

document.write('<br>--------question 13 (FIFO-First In First Out) -------<br>')
document.write("<br>")

const myQueue = [];

// add values to the back of the queue
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

// remove values from the front of the queue
document.write(myQueue.shift()); // prints 1
document.write(myQueue.shift()); // prints 2
document.write(myQueue.shift()); // prints 3

document.write("<br>")

document.write('<br>--------question14  (Last In-First Out) -------<br>')
document.write("<br>")

const myStack = [];

// add values to the top of the stack
myStack.push(1);
myStack.push(2);
myStack.push(3);

// remove values from the top of the stack
document.write(myStack.pop()); // prints 3
document.write(myStack.pop()); // prints 2
document.write(myStack.pop()); // prints 1



document.write("<br>")

document.write('<br>--------question 15 -------<br>')
document.write("<br>")
const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
