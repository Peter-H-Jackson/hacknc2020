const login = _ => {
  let username = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  for (let i=0; i < data.length; i++) {
    if (data[i].name == username) {
      if (data[i].password == password) {
        alert("Login Success!");
        window.open("ui.html");
      } else {
        alert("Incorrect password");
        return;
      }
    }
  }
  alert("That user does not exist");
}
