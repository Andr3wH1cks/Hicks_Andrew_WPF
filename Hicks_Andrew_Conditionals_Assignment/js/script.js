/* Andrew Hicks
Conditionals Assignment
SDI 01
4/23/2015
Dan Williams
 */

// Alert to let the users know what the premise of the data they are imputing.

alert("Based on where you live, can you have a dog?");

// Prompt variables
var moving = Number(prompt("Are you moving? \nType 1 for yes, 2 for no."));
var whereWillYouLive = Number(prompt("Will you or do you now rent or own? \nType 1 for rent, 2 for own."));
var weightRestriction = Number(prompt("In pounds, what is the weight restriction for the dog at the place you rent?"));
var weightOfDog = Number(prompt("In pounds, how much does your dog weigh?"));


// Math Variables

var overWeight = weightOfDog - weightRestriction;
var underWeight = weightRestriction - weightOfDog;
var weightMath;

if (moving == 1) {


    if (whereWillYouLive == 2) {
        console.log("You own your house, you can do whatever you want!");
        console.log("See what the difference is if you have to rent.");

    }
    else {
        if (whereWillYouLive == 1) {
            weightMath = (weightOfDog <= weightRestriction) ? "Your dog is " + String(underWeight) + " pound(s) under the restriction. You're good to go!" : "Your dog is " + String(overWeight) + " pound(s) of the restriction. YOu either need to put your dog on a diet, or find another place to live.";
            console.log(weightMath);
        }
    }
}


        else if (moving == 2) {
            console.log("So you're not moving, but you still want a dog.");
            if (whereWillYouLive == 2) {
                console.log("You own your house, you can do whatever you want!");
                console.log("See what the difference is if you have to rent.");

            }
            else {
                if (whereWillYouLive == 1) {

                    weightMath = (weightOfDog <= weightRestriction) ?
                    "Your dog is " + String(underWeight) + " pound(s) under the restriction. You're good to go!" :
                    "Your dog is " + String(overWeight) + " pound(s) of the restriction. YOu either need to put your dog on a diet, or find another place to live.";
                    console.log(weightMath);
                }
            }
}