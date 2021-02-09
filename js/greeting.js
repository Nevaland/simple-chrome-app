const nameContainer = document.querySelector(".js-name");

const USER_LS = "username";

function paintName(name) {
  nameContainer.innerHTML = "";
  const greeting = document.createElement("span");
  greeting.className = "name__text";
  greeting.innerHTML = `Hello ${name}`;
  nameContainer.appendChild(greeting);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  saveName(value);
  paintName(value);
}

function paintInput() {
  const input = document.createElement("input");
  input.placeholder = "Type your name here";
  input.type = "text";
  input.className = "name__input";

  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
}

function loadName() {
  const username = localStorage.getItem(USER_LS);
  if (username === null) {
    paintInput();
  } else {
    paintName(username);
  }
}

function init() {
  loadName();
}

init();
