let todos = [];
let button = document.getElementById("button1");

addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();

  let input = document.getElementById("todoinput").value;

  let todoText = input;

  if (todoText !== "") {
    const todo = {
      id: Date.now(),
      text: todoText,
    };

    todos.push(todo);
    input.value = "";

    renderTodoList();
  }
}
function updateTodo(todoId) {
  const newText = prompt("Yeni metni girin:");
  if (newText !== null) {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex !== -1) {
      todos[todoIndex].text = newText;
      renderTodoList();
    }
  }
}

function deleteTodo(todoId) {
  const confirmDelete = confirm("bunu silmek istediyinizden eminsiniz?");
  if (confirmDelete) {
    todos = todos.filter((todo) => todo.id !== todoId);
    renderTodoList();
  }
}

function renderTodoList() {
  const todoList = document.getElementById("TodoList");

  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const inp = document.createElement("input");
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const p = document.createElement("p");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    inp.type = "checkbox";
    inp.className = "inp2";
    div.className = "a2";
    div1.className = "a3";
    div2.className = "a4";

    p.textContent = todo.text;
    editButton.textContent = "update";
    deleteButton.textContent = "Sil";

    editButton.addEventListener("click", () => updateTodo(todo.id));
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    div.appendChild(inp);
    div.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(p);
    div1.appendChild(editButton);
    div1.appendChild(deleteButton);
    todoList.appendChild(div);
  });
}
