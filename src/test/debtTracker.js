/* Program that tracks and gives info on a user's outstanding debts

*/

class debtTracker {

    constructor(name, principal, interest) {
        this.name = name;
        this.principal = principal;
        this.interest = interest;
    }

    getName() {
        return this.name;
    }

    getPrincipal() {
        return this.principal;
    }

    getInterest() {
        return this.interest;
    }
}
  // This is a method that is the same thing as the constructor and still works
  /*function debtObject (name, principal, interest) {
    this.name = name;
    this.principal = principal;
    this.interest = interest;
} */

  getPayoff(years) {
        var i;
        var annualTotal = principal;
        for (i = 0; i < years; i++){
            annualTotal *= interest
        }
        return ("If you pay this debt balance of over the course of " + years +
        "years, you will pay  $" + annualTotal + " total.");
    }

}

// Create a debtObject
var mortgageDebt = new debtObject("mortgage", 500, 1.12)

// HTML implementation - saw from w3schools.com
document.getElementById("demo2").innerHTML =
"The total after year 1 is " + (mortgageDebt.principal * mortgageDebt.interest) + " dollars.";
