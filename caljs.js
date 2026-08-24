document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("result");
  const buttons = document.querySelectorAll("button");

  let justCalculated = false;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.textContent;

      // "=" button
      if (value === "=") {
        try {
          input.value = eval(input.value);
          justCalculated = true;
        } catch {
          input.value = "Error";
          justCalculated = true;
        }
      }

      // AC button
      else if (value === "AC") {
        input.value = "";
        justCalculated = false;
      }

      // Backspace button
      else if (value === "<-") {
        input.value = input.value.slice(0, -1);
        justCalculated = false;
      }

      // Number/operator buttons
      else {
        // If result was just calculated and user enters a number,
        // clear the previous result
        if (justCalculated && !isNaN(value)) {
          input.value = "";
        }

        input.value += value;
        justCalculated = false;
      }
    });
  });


  // Keyboard input
  document.addEventListener("keydown", (e) => {

    const allowedKeys = [
      "0","1","2","3","4","5","6","7","8","9",
      ".", "+", "-", "*", "/", "Enter", "Backspace"
    ];

    if (allowedKeys.includes(e.key)) {

      // Enter = calculate
      if (e.key === "Enter") {
        try {
          input.value = eval(input.value);
          justCalculated = true;
        } catch {
          input.value = "Error";
          justCalculated = true;
        }
      }

      // Backspace
      else if (e.key === "Backspace") {
        input.value = input.value.slice(0, -1);
        justCalculated = false;
      }

      // Number/operator
      else {

        // Clear result when a number is entered
        if (justCalculated && !isNaN(e.key)) {
          input.value = "";
        }

        input.value += e.key;
        justCalculated = false;
      }

      e.preventDefault();
    }
  });
});
