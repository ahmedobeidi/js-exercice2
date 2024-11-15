/* Exercice 9 
    const number = window.prompt("Enter a number: ");
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${number} * ${i} = ${number * i} \n`;
    }

    console.log(result);
*/

/* Exercice 10 
const str = window.prompt("Enter a word:");

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
*/

/* Exercice 11 
while (true) {
    const number = window.prompt("Enter a number between 0 and 10");
    if (number > 10) {
        window.alert("Enter a number between 0 and 10");
        continue;
    }
    else if (number < 5) { 
        window.alert("The number is less than 5");
        break; 
    }
    else if (number > 5) {
        window.alert("The number is greater than 5");
        break;  
    }
    else { 
        window.alert("The number is equal 5");
        break;   
    }
}
*/

/* Exercice 12 
function square(number) {
    let result = number ** 2;
    return result;
}

const number = window.prompt("Enter a number");
let result = square(number);

window.alert(`The square of ${number} is ${result}`);
*/