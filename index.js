document.addEventListener("DOMContentLoaded", function () {
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".calc-button, .calc-button1");

    let currentInput = "";
    let operator = "";
    let previousInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;

            if (!isNaN(value) || value === ".") {
                currentInput += value;
                screen.textContent = currentInput;
            } else if (value === "c") {
                currentInput = "";
                previousInput = "";
                operator = "";
                screen.textContent = "0";
            } else if (value === "←") {
                currentInput = currentInput.slice(0, -1);
                screen.textContent = currentInput || "0";
            } else if (["÷", "×", "−", "+"].includes(value)) {
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            } else if (value === "=") {
                if (previousInput && currentInput) {
                    const num1 = parseFloat(previousInput);
                    const num2 = parseFloat(currentInput);
                    let result;

                    switch (operator) {
                        case "÷":
                            result = num1 / num2;
                            break;
                        case "×":
                            result = num1 * num2;
                            break;
                        case "−":
                            result = num1 - num2;
                            break;
                        case "+":
                            result = num1 + num2;
                            break;
                        default:
                            return;
                    }

                    screen.textContent = result;
                    currentInput = result.toString();
                    previousInput = "";
                    operator = "";
                }
            }
        });
    });
});
