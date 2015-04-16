/* Andrew Hicks
SDI Term 1
3/16/15
Dan Williams
 */


// Here I am creating variables and prompts.

alert("You're driving to two places today.");

var distanceToA = /*Assigning the prompts to read as numbers*/Number(prompt("How many miles are you driving to point A?"));
var distanceToB = /*Assigning the prompts to read as numbers*/Number(prompt("How many miles are you driving to point B?"));
var time = /*Assigning the prompts to read as numbers*/Number(prompt("How many hours does it take you to get there?"));
var gas = /*Assigning the prompts to read as numbers*/Number(prompt("How many gallons of gas are you using to get there?"));

// Here are the variables for the math equations.

var speed = (distanceToA + distanceToB)/time;
var mileage = (distanceToA + distanceToB)/gas;
distanceToA += distanceToB;

// Printing variables to the console.
console.log ("You're total distance traveled will me " + String(distanceToA) + " miles.");
console