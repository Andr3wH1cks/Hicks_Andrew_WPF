/* Andrew Hicks
Functions Assignment
SDI 01
Dan Williams
 */




//variables

var p = Number(prompt("How much is in your savings account"));

// Function to validate prompt.

function pPrompt(numberEntered){
    while (numberEntered == ""){

        numberEntered = Number(prompt("Please enter how much is in the account."))
    }

    return numberEntered;
}

p = pPrompt(p); // Invocation of function.

var rate = Number(prompt("What is your interest rate?"));

// Function to validate prompt.

function ratePrompt(numberEntered){
    while (numberEntered == ""){

        numberEntered = Number(prompt("Please enter the percentage rate."))
    }

    return numberEntered;
}

rate = ratePrompt(rate); // Invocation of function.

var t = Number(prompt("In years, how long will you be keeping your money in your account without adding or removing anything?"));

// Function to validate prompt.

function tPrompt(numberEntered){
    while(numberEntered == ""){

        numberEntered = Number(prompt("Please enter how long the money is in the account in years."))
    }

    return numberEntered;
}

t = tPrompt(t); // Invocation of function.

var r = rate/100; // Dividing the rate by 100 to get the correct number to multiply by.
var interestRateVariables = calcInterest (p, r, t); // Setting Arrangement for function to calculate.


// Here is the main function for calculating interest
function calcInterest(p, r, t){
    var interest = p * r * t;

    return interest;

}
// Anonymous Function
var totalAmount = function (int, p){
    var total = int + p;
    return total;
}

var total = totalAmount(interestRateVariables, p);
// main code
console.log ("Based on what you have in your account, you will make " + interestRateVariables + " dollars in interest over the course of " + t + " years.");
console.log ("Your new total of what you have will be " + total + " dollars.");