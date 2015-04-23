/* Andrew Hicks
Conditionals Assignment
SDI 01
4/23/2015
Dan Williams
 */

// Alert to let the users know what the premise of the data they are imputing.

alert("Based on where you live, can you have a dog?");

// Prompt variables

var whereDoYouLive = Number(prompt("Do you rent or own? \nType 1 for rent and 2 for own."));
var weightRestriction = Number(prompt("In pounds, what is the weight restriction for the dog at the place you rent?"));
var weightOfDog = Number(prompt("In pounds, how much does your dog weigh?"));


// Math Variables

var overWeight = weightOfDog - weightRestriction;
var underWeight = weightRestriction - weightOfDog;


if (whereDoYouLive == 2){
    console.log ("You own your house, you can do whatever you want!");

}
else if (whereDoYouLive == 1) {
    if (weightOfDog <= weightRestriction) {

        console.log("Your dog is " + String(underWeight) + " pound(s) under the restriction. You're good to go!");

    }
}
else {
    console.log ("Your dog is " + String(overWeight) + " pound(s) of the restriction. YOu either need to put your dog on a diet, or find another place to live.");

}