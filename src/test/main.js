class Expenses {
    constructor(name, dateSpent, type, amount) {
        this.name = name;
        this.dateSpent = dateSpent;
        this.type = type;
        this.amount = amount;
    }

    getName() {
        return this.name;
    }

    getDate() {
        return this.dateSpent;
    }

    getType() {
        return this.type;
    }

    getAmount() {
        return this.amount;
    }

    toCSV () {
      return [
      name, date, type, amount]
      ]
    }
}

function myFunction() {
  var expense = new Expenses(
  document.getElementById("expnameinput").value,
  document.getElementById("expamountinput").value,
  document.getElementById("exptypeinput").value,
  document.getElementById("expdateinput").value
  );

  document.getElementById("output").innerHTML = expense.getName();
}