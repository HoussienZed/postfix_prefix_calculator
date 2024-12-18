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
            const value = button.dataset.value; //returns a string
    
            if (value) {
                input.innerHTML += value; // returns a string
            }
        })
    })
}

function clearScreen() {
    clear.addEventListener("click", () => {
        output.innerHTML = "";
        input.innerHTML = "";
    })
}


function deleteButton() {
    del.addEventListener("click", () => {
        input.innerHTML = input.innerHTML.slice(0, -1);
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


function postfixExpressionsCalculator() {
    const equation = input.innerHTML;
    
    let numbersStack = [];
    let topElementIndex = 0;
    let targetCharacter;
    let firstNumber;
    let secondNumber;
    let result;

    for (let i = 0; i < equation.length; i++) {
        targetCharacter = parseInt(equation[i]);

        if (!isNaN(targetCharacter)) {
            numbersStack[topElementIndex] = targetCharacter;
            topElementIndex ++;
        } else {
            topElementIndex --;
            firstNumber = numbersStack[topElementIndex];
            topElementIndex --;
            secondNumber = numbersStack[topElementIndex];
            

            if (equation[i] == "+") {
                result = firstNumber + secondNumber;
            } else if (equation[i] == "-") {
                result = firstNumber - secondNumber;
            } else if (equation[i] == "*") {
                result = firstNumber * secondNumber;
            } else if (equation[i] == "/") {
                result = firstNumber / secondNumber;
            }
            
            numbersStack[topElementIndex] = result;
            topElementIndex ++;
        }
    }

    output.innerHTML = result;
    return;
}



function prefixExpressionsCalculator() {

}


function calculatingPostfixExpressions() {
    output.innerHTML = "";
    input.innerHTML = "";
    displayOnScreen();
    clearScreen();
    deleteButton();

    equals.addEventListener("click", postfixExpressionsCalculator);
}

function calculatingPrefixExpressions() {
    output.innerHTML = "";
    input.innerHTML = "";
    displayOnScreen();
    clearScreen();
    deleteButton();
}