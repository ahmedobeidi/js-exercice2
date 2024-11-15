import { calcule } from "./restModule.js";

const submitButton = document.getElementById('submit');

submitButton.addEventListener("click", function() {
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;

    const result = calcule(firstNumber, secondNumber);
    
    window.alert(result);
});
