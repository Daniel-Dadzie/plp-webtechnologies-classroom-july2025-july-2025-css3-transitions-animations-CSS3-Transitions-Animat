// script.js

// Global variable
let globalNumber = 10;

// Function with parameters & return value
function multiplyNumbers(a, b) {
  return a * b;
}

// Function demonstrating local vs global scope
function scopeExample() {
  let localNumber = 5;  // Local scope
  console.log("Local:", localNumber);   // accessible
  console.log("Global:", globalNumber); // accessible
  return localNumber + globalNumber;    // combine and return
}

// Function triggered by button in HTML
function showCalculation() {
  console.log("2 x 3 =", multiplyNumbers(2, 3));   // Using parameters & return
  console.log("Scope Example Result:", scopeExample()); 
}

// Function to animate box using CSS class toggle
function animateBox() {
  const box = document.getElementById("js-box");

  // Toggle the "animate" class to trigger CSS transitions
  box.classList.toggle("animate");
}
