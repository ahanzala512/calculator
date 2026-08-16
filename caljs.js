document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("result");
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.textContent;

      if (value === "=") {
        try {
          input.value = eval(input.value);
        } catch {
          input.value = "Error";
        }
      } else if (value === "AC") {
        input.value = ""; // Clear everything
      } else if (value === "<-") {
        input.value = input.value.slice(0, -1); // Remove last character
      } else {
        input.value += value;
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    const allowedKeys = ["0","1","2","3","4","5","6","7","8","9",".","+","-","*","/","Enter","Backspace"];
    
    if (allowedKeys.includes(e.key)) {
      if (e.key === "Enter") {
        try {
          input.value = eval(input.value);
        } catch {
          input.value = "Error";
        }
      } else if (e.key === "Backspace") {
        input.value = input.value.slice(0, -1);
      } else {
        input.value += e.key;
      }
    }

    e.preventDefault();
  });
});