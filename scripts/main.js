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


//function to display input on screen
function displayOnScreen() {
    //getElementByClassName return HTML collection so we need to convert it to array to be able to use forEach feature
    Array.from(buttons).forEach(button => { 
        button.addEventListener("click", () => {
            const value = button.dataset.value;
    
            if (value) {
                output.innerHTML += value;
            }
        })
    })
}


postfixCalculator.addEventListener("click", () => {
    calculator.style.visibility = "visible";
    calculatingPostfixExpressions();
})

prefixCalculator.addEventListener("click", () => {
    calculator.style.visibility = "visible";
    calculatingPrefixExpressions();

})

function calculatingPostfixExpressions() {
    output.innerHTML = "";
    displayOnScreen();
}

function calculatingPrefixExpressions() {
    output.innerHTML = "";
    displayOnScreen();
}