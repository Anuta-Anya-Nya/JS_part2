const loginEl = document.getElementById("login");
const passwordEl = document.getElementById("password");
const btnLoginEl = document.getElementById("btn");

btnLoginEl.addEventListener("click", saveDataProfile);

function saveDataProfile() {
  const login = loginEl.value;
  const password = passwordEl.value;
  saveProfile(login, password);
  window.open('profile.html', '_self');
}