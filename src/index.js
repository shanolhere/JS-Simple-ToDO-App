const error = document.querySelector(".error");
const addBtn = document.querySelector(".add");
const todo = document.querySelector(".todo");
const text = document.querySelector(".text");

text.addEventListener("input", () => {
  console.log(text.value);
});

addBtn.addEventListener("click", () => {
  if (text.value === "") {
    error.innerHTML = "Please enter a Todo.";
  } else {
    let li = document.createElement("li");
    li.textContent = text.value;
    let pos = todo.firstChild;
    //console.log(pos);
    let a = document.createElement("a");
    a.textContent = "X";
    a.href = "javascript:void(0)";
    a.className = "remove";
    li.appendChild(a);
    if (pos == null) {
      todo.appendChild(li);
    } else {
      todo.insertBefore(li, pos);
    }
    text.value = "";
  }
});

todo.addEventListener("click", (e) => {
  let todolist = e.target.parentNode;
  todo.removeChild(todolist);
});
