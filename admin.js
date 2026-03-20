function createStudent() {
  let user = document.getElementById("newUser").value;
  let pass = document.getElementById("newPass").value;

  if (user === "" || pass === "") {
    alert("Fill all fields!");
    return;
  }

  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.push({ username: user, password: pass });

  localStorage.setItem("students", JSON.stringify(students));

  alert("Student Account Created!");
}