class User {

  constructor (name, email, password, phone, goals) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.goals = goals;

  }

  getName() {
    return name;
  }

  getEmail() {
    return email;
  }

  getPassword() {
    return password;
  }

  getPhone() {
    return phone;
  }

  getGoals() {
    return goals;
  }

  toCSV() {
    return [
    [name, email, phone, password, goals]
    ]
  }
}

function createUser() {

  var name, email, password, phone, goals;

  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  phone = document.getElementById("phone").value;
  goals = document.getElementById("goals").value;

  var user = new User(name, email, password, phone, goals);

  const userRow = user.toCSV();

  file.open("data.csv");

  let csvContent =
}