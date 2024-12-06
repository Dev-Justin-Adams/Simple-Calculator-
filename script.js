const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += ` ${operator} `;
}

function appendFunction(func) {
  display.value += func
}

function appendTrig(func) {
  const value = prompt(`Enter angle in degrees for ${func}:`);
  if (value !== null) {
    const radians = (parseFloat(value) * Math.PI) / 180; // Convert degrees to radians
    display.value += `Math.${func}(${radians})`;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Evaluate the expression
    display.value = eval(display.value.replace(/%/g, '/100'));
  } catch (error) {
    display.value = 'Error';
  }
}