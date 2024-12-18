const postfixCalculator = document.getElementById("postFix");
const prefixCalculator = document.getElementById("preFix");
const calculator = document.getElementById("calculator");

const buttons = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("operators");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");

const input = document.getElementById("input");
const output = document.getElementById("output");

postfixCalculator.addEventListener("click", () => {
    calculator.style.visibility = "visible";
})

prefixCalculator.addEventListener("click", () => {
    calculator.style.visibility = "visible";
})