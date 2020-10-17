function submit() {
  var expense_name, expense_amount, expense_date
  expense_name = document.getElementById("expnameinput").value;
  expense_date = document.getElementById("expdateinput").value;
  expense_amount = document.getElementById("expamountinput").value;

  if (expense_amount == null || expense_amount == NaN || parseFloat(expense_amount) < 0) {
    window.alert("Invalid amount input!");
  }

  if (document.getElementById("expensetype").value == "onetimeexpense") {
    one_time_expense(expense_name, expense_amount, expense_date);
  } else if (document.getElementById("expensetype").value == "subscription") {
    subscription(expense_name, expense_amount, expense_date);
  } else if (document.getElementById("expensetype").value == "debt") {
    debt(expense_name, expense_amount, expense_date);
  }

}

function one_time_expense(name, amount, date) {
  document.getElementById("out1").innerHTML = amount;

}

function subscription(name, amount, date) {
  document.getElementById("out").innerHTML = expense_amount;
}

function debt(name, amount, date) {
  document.getElementById("out").innerHTML = expense_amount;
}