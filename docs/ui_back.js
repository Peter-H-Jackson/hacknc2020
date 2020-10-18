function addExp() {
  var title = document.getElementById("titleinput").value;
  var amount = document.getElementById("amountinput").value;
  var date = document.getElementById("dateinput").value;

  document.getElementById("titleinput").innerHTML = "";
  document.getElementById("amountinput").innerHTML = "";
  document.getElementById("dateinput").innerHTML = "";

  document.getElementById("title_1").innerHTML = title;
  document.getElementById("amount_1").innerHTML = amount;
  document.getElementById("date_1").innerHTML = date;
}