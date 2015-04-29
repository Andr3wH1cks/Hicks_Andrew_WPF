/* Andrew Hicks
Functions Assignment
SDI 01
Dan Williams
 */


//variables
var interestRateVariables = calcInterest(Number(prompt("Principal")), Number(prompt("Rate")), Number(prompt("Time")));

function calcInterest(P, r, t){
    var interest = P * r * t;
    console.log (interest);
}