function validate() {
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;

    const result = firstNumber % secondNumber;
    
    window.alert(result);
}