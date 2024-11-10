document.getElementById("buttonTask").addEventListener("click", addTask);

function addTask() {
  const taskName = document.getElementById("inputTask").value;

  if (taskName === "") {
    alert("Nazwa zadania nie może być pusta");
    return;
  }

  const taskPart = document.createElement("li");
  taskPart.textContent = taskName;

  const editButton = document.createElement("button");

  editButton.textContent = "Edytuj";
  editButton.addEventListener("click", () => {
    const editTaskName = prompt("Edytuj nazwę zadania:", taskName);
    if (editTaskName !== null && editTaskName.trim() !== "") {
      taskPart.firstChild.nodeValue = editTaskName;
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Usuń";
  deleteButton.addEventListener("click", () => {
    taskPart.remove();
  });

  taskPart.appendChild(editButton);
  taskPart.appendChild(deleteButton);

  const listTasks = document.getElementById("listTasks");
  listTasks.appendChild(taskPart);

  document.getElementById("inputTask").value = "";
}
