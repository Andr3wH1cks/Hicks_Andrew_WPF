/* Andrew Hicks
SDI Term 1
3/16/15
Dan Williams
 */


// Here I am creating variables and prompts.

alert("You're driving to two places today.");

var distanceToA = /*Assigning the prompts to read as numbers*/Number(prompt("How many miles are you driving to point A?"));
var distanceToB = /*Assigning the prompts to read as numbers*/Number(prompt("How many miles are you driving to point B?"));
var timeToA = /*Assigning the prompts to read as numbers*/Number(prompt("How many hours are you driving to point A?"));
var timeToB = /*Assigning the prompts to read as numbers*/Number(prompt("How many hours are you driving to point B?"));
var gas = /*Assigning the prompts to read as numbers*/Number(prompt("How many gallons of gas are you using to get there?"));

// Here are the variables for the math equations.

var speed = (distanceToA + distanceToB)/(timeToA + timeToB);
var mileage = (distanceToA + distanceToB)/gas;
distanceToA += distanceToB;
timeToA += timeToB;

// Printing variables to the console.
console.log ("Your total distance traveled was " + String(distanceToA) + " miles.");
console.log ("Your total time on the road was " + String(timeToA) + " hours.");
console.log ("Your average speed for your trip was " + String(speed) + " miles per hour.");
console.log ("Your average fuel mileage was " + String(mileage) + " miles per gallon.");