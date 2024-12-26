// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
let currentExpression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      // Calculate and display the result
      try {
        currentExpression = eval(currentExpression).toString(); // Evaluate the expression
      } catch {
        currentExpression = 'Error'; // Handle invalid input
      }
    } else if (value === 'C') {
      // Clear the display
      currentExpression = '';
    } else {
      // Add the button value to the current expression
      currentExpression += value;
    }

    // Update the display
    display.value = currentExpression;
  });
});

