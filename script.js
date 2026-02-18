let users = JSON.parse(localStorage.getItem("users")) || [];

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

function addUser() {
  const username = document.getElementById("username").value;
  if (username === "") return alert("Enter name");

  users.push(username);
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("username").value = "";
  renderUsers();
}

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
}

function renderUsers() {
  const list = document.getElementById("userList");
  list.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.className = "user";
    li.innerHTML = `${user} <button onclick="deleteUser(${index})">❌</button>`;
    list.appendChild(li);
  });

  document.getElementById("totalUsers").textContent = users.length;
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

/* Simple Chart */
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#3498db";
ctx.fillRect(30, 100, 40, 80);
ctx.fillRect(90, 60, 40, 120);
ctx.fillRect(150, 40, 40, 140);
ctx.fillRect(210, 80, 40, 100);

renderUsers();
