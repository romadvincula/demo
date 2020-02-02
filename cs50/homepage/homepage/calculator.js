let xString = '';
let yString = '';
let calcVariable = '';

// Set which variable to manipulate
function setVariable(element) {
    console.log(element.value);
    calcVariable = element.value
}

function operate(element) {
    console.log(element.value);
    console.log(element.className)

    let v = element.value;
    
    if (calcVariable === "x")
    {
        // Append value to selected variable
        xString = xString + v;
    }
    else if (calcVariable === "y")
    {
        yString = yString + v;
    }
    else
    {
        document.querySelector("#result").innerHTML = "(Set X or Y first)"
    }
    
}

function calculate(element) {
    let x = parseInt(xString);
    let y = parseInt(yString);

    let z = 0;

    if ((isNaN(x) || isNaN(y)) && element.value != "C") {
        document.querySelector("#result").innerHTML = "(X or Y not set properly)";
        return;
    }

    switch (element.value) {
        case "+": 
            z = x + y;
            break;
        case "-":
            z = x - y;
            break;
        case "*":
            z = x * y;
            break;
        case "/":
            z = x / y;
            break;
        default:
            xString = '';
            yString = '';
            calcVariable = '';
            z = 0;
    }

    // Resets after doing successful calculation
    xString = '';
    yString = '';
    calcVariable = '';

    document.querySelector("#result").innerHTML = z;
}