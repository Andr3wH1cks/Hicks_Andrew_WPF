/* Andrew Hicks
Functions Assignment
SDI 01
Dan Williams
 */


alert ("You are wanting to see how much money you will make off your saving account");

//variables

var p = Number(prompt("How much is in your savings account"));

// Function to validate prompt.

function pPrompt(numberEntered){ // Creating loop
    while (numberEntered == ""){

        numberEntered = Number(prompt("Please enter how much is in the account."))
    }

    return numberEntered; // Returning values
}

p = pPrompt(p); // Invocation of function.

var rate = Number(prompt("What is your interest rate?"));

// Function to validate prompt.

function ratePrompt(numberEntered){ // Creating loop
    while (numberEntered == ""){

        numberEntered = Number(prompt("Please enter the percentage rate."))
    }

    return numberEntered; // Returning values
}

rate = ratePrompt(rate); // Invocation of function.

var t = Number(prompt("In years, how long will you be keeping your money in your account without adding or removing anything?"));

// Function to validate prompt.

function tPrompt(numberEntered){ // Creating loop
    while(numberEntered == ""){

        numberEntered = Number(prompt("Please enter how long the money is in the account in years."))
    }

    return numberEntered; // Returning values
}

t = tPrompt(t); // Invocation of function.

var r = rate/100; // Dividing the rate by 100 to get the correct number to multiply by.
var interestRateVariables = calcInterest (p, r, t); // Setting Arrangement for function to calculate.


// Here is the main function for calculating interest
// Normal Function
function calcInterest(p, r, t){
    var interest = p * r * t;

    return interest;

}
// Anonymous Function
var totalAmount = function (int, p){ // Defining function variables
    var total = int + p;  // Creating formula
    return total; // Returning values
}

var total = totalAmount(interestRateVariables, p); // Invoking anonymous function


// main code


console.log ("Based on what you have in your account, you will make " + interestRateVariables + " dollars in interest over the course of " + t + " years.");
console.log ("Your new total of what you have will be " + total + " dollars.");


/* TEST

At a Principal of 6000 dollars, and 5% interest over 6 years, the amount accumulated should come out to be 1800.
1800 + 6000 = 7800 for the account holders new total.
 */