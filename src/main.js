import Expenses from './Expenses.js';

function doSomething() {

  var expense = new Expense(
  document.getElementById("expnameinput").value,
  document.getElementById("expamountinput").value,
  document.getElementById("exptypeinput").value,
  document.getElementById("expdateinput").value
  );

  document.getElementById("out_name").innerHTML = "fuck you";

}