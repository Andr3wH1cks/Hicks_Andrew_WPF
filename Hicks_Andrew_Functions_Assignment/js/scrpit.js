/* Andrew Hicks
Functions Assignment
SDI 01
Dan Williams
 */




//variables
var interestRateVariables = calcInterest (p, r, t);
var p = Number(prompt("How much is in your savings account"));
var rate = Number(prompt("What is your interest rate?"));
var t = Number(prompt("In years, how long will you be keeping your money in your account without adding or removing anything?"));
var r = rate/100;
var interestFormula = calcInterest(p, r, t);


// Functions

// validating prompt functions

function pPrompt(numberEntered){
    while (numberEntered == ""){

        numberEntered = Number(prompt("Please enter how much is in the account."))
    }

    return numberEntered;
}

function ratePrompt(numberEntered){
    while (numberEntered == ""){

        numberEntered = Number(prompt("Please enter the percentage rate."))
    }

    return numberEntered;
}

function tPrompt(numberEntered){
    while(numberEntered == ""){

        numberEntered = Number(prompt("Please enter how long the money is in the account in years."))
    }

    return numberEntered;
}
function calcInterest(p, r, t){
    var interest = p * r * t;
    console.log (interest);

    return interest;

}


// main code
 p = pPrompt(p);