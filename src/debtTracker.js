/* Program that tracks and gives info on a user's outstanding debts

*/

class debtTracker {
    function debtObject (name, principal, interest) {
        this.name = name;
        this.principal = principal;
        this.interest = interest;
        //comment
}
}
function debtObject (name, principal, interest) {
  this.name = name;
  this.principal = principal;
  this.interest = interest;
}

// Create a debtObject
var mortgageDebt = new debtObject("mortgage", 500, 1.12)

// HTML implementation - saw from w3schools.com
document.getElementById("demo2").innerHTML =
"The total after year 1 is " + (mortgageDebt.principal * mortgageDebt.interest) + " dollars.";