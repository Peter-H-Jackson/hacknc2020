var counter = 0;

function addExp() {
  var title = document.getElementById("titleinput").value;
  var amount = document.getElementById("amountinput").value;
  var date = document.getElementById("dateinput").value;

  document.getElementById("titleinput").value = "";
  document.getElementById("amountinput").value = "";
  document.getElementById("dateinput").value = "";

  if (counter == 0) {
    document.getElementById("title_1").innerHTML = title;
    document.getElementById("amount_1").innerHTML = amount;
    document.getElementById("date_1").innerHTML = date;
    counter = counter + 1;
  } else if (counter == 1) {
    document.getElementById("title_2").innerHTML = title;
    document.getElementById("amount_2").innerHTML = amount;
    document.getElementById("date_2").innerHTML = date;
    counter = counter + 1;
  } else if (counter == 2) {
    document.getElementById("title_3").innerHTML = title;
    document.getElementById("amount_3").innerHTML = amount;
    document.getElementById("date_3").innerHTML = date;
    counter = counter + 1;
  } else if (counter == 3) {
    document.getElementById("title_4").innerHTML = title;
    document.getElementById("amount_4").innerHTML = amount;
    document.getElementById("date_4").innerHTML = date;
  }

}