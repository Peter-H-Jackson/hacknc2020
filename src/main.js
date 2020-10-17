// Global Variables
var expense_name, expense_amount, expense_date
expense_amount = document.getElementById("expamountinput").value;
expense_name = document.getElementById("expnameinput").value;
expense_date = document.getElementById("expdateinput").value;

function submit() {

  if (expense_amount == null || expense_amount == NaN || parseFloat(expense_amount) < 0) {
    window.alert("Invalid amount input!");
  }

  if (document.getElementById("expensetype").value == "onetimeexpense") {
    one_time_expense();
  } else if (document.getElementById("expensetype").value == "subscription") {
    subscription();
  } else if (document.getElementById("expensetype").value == "debt") {
    debt();
  }

}

function one_time_expense() {
  // document.getElementById("out").innerHTML = "Hello, world.";
  document.getElementById("out1").innerHTML = expense_amount;
  console.log("One time expense of " + expense_amount);
}

function subscription() {
  document.getElementById("out").innerHTML = expense_amount;
}

function debt() {
  document.getElementById("out").innerHTML = expense_amount;
}