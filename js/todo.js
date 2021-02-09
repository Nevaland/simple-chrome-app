const toDoForm = document.querySelector(".js-to-do"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-list");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  li.className = "toDo";

  const delBtn = document.createElement("span");
  delBtn.innerHTML = "X";
  delBtn.className = "toDo__button";
  delBtn.addEventListener("click", deleteToDo);

  const label = document.createElement("label");
  label.innerText = text;

  const newId = toDos.length + 1;

  li.appendChild(label);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    id: newId,
    text: text,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
