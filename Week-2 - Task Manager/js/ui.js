const taskList = document.getElementById("taskList");
const stats = document.getElementById("stats");

function renderTasks(tasks) {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.draggable = true;
    li.dataset.id = task.id;
    li.className = `${task.completed ? "completed" : ""} priority-${task.priority}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onclick = () => toggleTask(task.id);

    const span = document.createElement("span");
    span.textContent = `${task.text} (${task.priority}) ${task.dueDate || ""}`;
    span.ondblclick = () => editTask(task.id);

    const del = document.createElement("button");
    del.textContent = "❌";
    del.onclick = () => deleteTask(task.id);

    li.append(checkbox, span, del);
    taskList.appendChild(li);
  });

  updateStats(tasks);
}

function updateStats(tasks) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  stats.textContent = `Total: ${total} | Completed: ${completed}`;
}
