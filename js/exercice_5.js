function validate() {
    const firstNumber = window.document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    
    const firstInt = Math.trunc(firstNumber);
    const secondInt = Math.trunc(secondNumber);
    const result = firstInt * secondInt;

    window.alert(result);
}