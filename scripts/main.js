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


const prefixDescription = document.getElementById("prefixInstructions");
const postfixDescription = document.getElementById("postfixInstructions");

let calculatorIsOn = false;
let calculatorIsVisible = false;


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

//function to clear the screen
function clearScreen() {
    clear.addEventListener("click", () => {
        output.innerHTML = "";
        input.innerHTML = "";
    })
}

//function to delete last input character
function deleteButton() {
    del.addEventListener("click", () => {
        input.innerHTML = input.innerHTML.slice(0, -1);
    })
}

//event to make the postfix calculator visible when chosen 
postfixCalculator.addEventListener("click", () => {
    input.innerHTML = "";
    output.innerHTML = "";
    
    if (!calculatorIsOn){ //flag to run calculatingPostfixExpressions() only the once
        calculatingPostfixExpressions();
    } 
    
    //code to make the calculator hidden again
    if (!calculatorIsVisible) {
        calculator.style.visibility = "visible";
        calculatorIsVisible = true;
    } else {
        calculator.style.visibility = "hidden";
        calculatorIsVisible = false;
    }
})


//showing description text for postfix calculator when hovering over
postfixCalculator.addEventListener("mouseover", () => {
    postfixDescription.style.visibility = "visible";
})

postfixCalculator.addEventListener("mouseout", () => {
    postfixDescription.style.visibility = "hidden";
})

//event to make prefix calculator visible when chosen
prefixCalculator.addEventListener("click", () => {
    input.innerHTML = "";
    output.innerHTML = "";
    
    if (!calculatorIsOn){ //flag to run calculatingPrefixExpressions() only the once
        calculatingPrefixExpressions();
    }
    
    //code to make the calculator hidden again
    if(!calculatorIsVisible) {
        calculator.style.visibility = "visible";
        calculatorIsVisible = true;
    } else {
        calculator.style.visibility = "hidden";
        calculatorIsVisible = false;
    }
})


//showing description texts for prefix calculator when hovering over
prefixCalculator.addEventListener("mouseover", () => {
    prefixDescription.style.visibility = "visible";
})

prefixCalculator.addEventListener("mouseout", () => {
    prefixDescription.style.visibility = "hidden";
})



//function to calculate postfix expression executed when eqal button is clicked
function postfixExpressionsCalculator() {
    const inputExpression = input.innerHTML;
    const equation = inputExpression.split(" ");
    
    let numbersStack = [];
    let topElementIndex = 0;
    let targetCharacter, firstNumber, secondNumber, result;

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
                result = secondNumber + firstNumber;
            } else if (equation[i] == "-") {
                result = secondNumber - firstNumber;
            } else if (equation[i] == "*") {
                result = secondNumber * firstNumber;
            } else if (equation[i] == "/") {
                result = secondNumber / firstNumber;
            }
            
            numbersStack[topElementIndex] = result;
            topElementIndex ++;
        }
    }

    //code line that check the answer is a number or not
    if(!isNaN(result)) {
        output.innerHTML = result;
    } else {
        output.innerHTML = "Wrong Expression";
    }
}

//function to calculate postfix expression executed when eqal button is clicked
function prefixExpressionsCalculator() {
    const equation = input.innerHTML;
    const reversedEquation = equation.split(" ").reverse();
    
    let numbersStack = [];
    let topElementIndex = 0;
    let targetCharacter, firstNumber, secondNumber, result;

    for (let i = 0; i < reversedEquation.length; i++) {
        targetCharacter = parseInt(reversedEquation[i]);

        if (!isNaN(targetCharacter)) {
            numbersStack[topElementIndex] = targetCharacter;
            topElementIndex ++;
        } else {
            topElementIndex --;
            firstNumber = numbersStack[topElementIndex];
            topElementIndex --;
            secondNumber = numbersStack[topElementIndex];
            

            if (reversedEquation[i] == "+") {
                result = firstNumber + secondNumber;
            } else if (reversedEquation[i] == "-") {
                result = firstNumber - secondNumber;
            } else if (reversedEquation[i] == "*") {
                result = firstNumber * secondNumber;
            } else if (reversedEquation[i] == "/") {
                result = firstNumber / secondNumber;
            }
            
            numbersStack[topElementIndex] = result;
            topElementIndex ++;
        }
    }
    
    //code line that check the answer is a number or not
    if(!isNaN(result)) {
        output.innerHTML = result;
    } else {
        output.innerHTML = "Wrong Expression";
    }
}

//function for the postfix calculator
function calculatingPostfixExpressions() {
    output.innerHTML = "";
    input.innerHTML = "";

    calculatorIsOn = true;
    calculatorIsVisible = true;
    
    displayOnScreen();
    clearScreen();
    deleteButton();

    equals.addEventListener("click", postfixExpressionsCalculator);
}

//function for postfix calculator
function calculatingPrefixExpressions() {
    output.innerHTML = "";
    input.innerHTML = "";

    calculatorIsOn = true;
    displayOnScreen();
    clearScreen();
    deleteButton();

    equals.addEventListener("click", prefixExpressionsCalculator);
}