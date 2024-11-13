function validate() {
    const pointure = window.prompt("Enter your pointure: ");
    const birthDate = window.prompt("Enter your birth date: ");
    let result = pointure * 2;
    result += 5;
    result *= 50;
    result -= birthDate;
    result += 1766;
    
    console.log(result);
}
validate();