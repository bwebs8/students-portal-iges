function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // ADMIN LOGIN
  if (username === "admin" && password === "admin123") {
    window.location.href = "admin.html";
    return;
  }

  // GET STUDENTS
  let students = JSON.parse(localStorage.getItem("students")) || [];

  let found = students.find(
    s => s.username === username && s.password === password
  );

  if (found) {
    localStorage.setItem("studentName", found.username);
    window.location.href = "student.html";
  } else {
    alert("Invalid Login!");
  }
}