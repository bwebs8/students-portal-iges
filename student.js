let name = localStorage.getItem("studentName");

if (!name) {
  window.location.href = "login.html";
}

document.getElementById("welcome").innerText = "Welcome " + name;