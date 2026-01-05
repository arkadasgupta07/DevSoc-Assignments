const display = document.getElementById("display");

// document.getElementById("display"): This searches your HTML for the element with id="display" (which is your <input> tag).

// const display: It saves that element into a variable called display. For changing text on screen, work on this


function appendToDisplay(input) {
  display.value += input;
}
// input is placeholder for user input
// += is append operator (concatenation of strings here)

function clearDisplay() {
  display.value = "";
}
// display value is empty string, hence clears screen

function deleteLast() {
  display.value = display.value.slice(0, -1);
}
// slice(0,-1) starts at index 0 and ends one index before (excluding) -1 index

function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch (error) {
    display.value = "Invalid Operation";
  }
}
// eval(): It is a built-in JavaScript function that takes a string and treats it like a math equation.
// try { ... }
// catch (error) { ... }
// try block: JavaScript attempts to run.
// catch block: If execution is not possible (like typing 5++5), the code would normally crash.
// Instead, the catch block intercepts the crash and displays "Invalid Operation" on the screen instead.