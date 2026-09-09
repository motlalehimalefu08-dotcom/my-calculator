let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let email = document.getElementById("email");
let button = document.getElementById("calculate");
let result = document.getElementById("result");

button.addEventListener("click", function() {


    if (email.value.trim() === "") {
        result.textContent = "Please enter your email.";
        return;
    }

    
    if (number1.value.trim() === "" ||
        number2.value.trim() === "" ||
        number3.value.trim() === "") {

        result.textContent = "Please enter all three numbers.";
        return;
    }


    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    let num3 = Number(number3.value);

    let sum = num1 + num2 + num3;

    result.textContent = "The sum is: " + sum;
});