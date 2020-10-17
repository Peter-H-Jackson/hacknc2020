import Expenses from './Expenses.js';

function dosomething() {
  var name, amount, type, date;

  name = document.getElementById("expnameinput").value;
  amount = document.getElementById("expamountinput").value;
  type = document.getElementById("exptypeinput").value;
  date = document.getElementById("expdateinput").value;

  var expense = new Expense(name, date, type, amount);

  document.getElementById("out_name").innerHTML = expense.getName();
  document.getElementById("out_amount").innerHTML = expense.getAmount();
  document.getElementById("out_type").innerHTML = expense.getType();
  document.getElementById("out_date").innerHTML = expense.getDate();

}