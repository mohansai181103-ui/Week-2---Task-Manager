const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDate");
const priorityInput = document.getElementById("priority");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filters button");
const themeToggle = document.getElementById("themeToggle");
const backupBtn = document.getElementById("backupBtn");
const restoreBtn = document.getElementById("restoreBtn");

let tasks = loadTasks();
let currentFilter = "all";

renderTasks(tasks);

function addTask(text, dueDate, priority) {
  if (text.length < 3) {
    alert("Task must be at least 3 characters");
    return;
  }

  tasks.push({
    id: generateId(),
    text,
    completed: false,
    dueDate,
    priority
  });

  saveTasks(tasks);
  applyFilter();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks(tasks);
  applyFilter();
}

function toggleTask(id) {
  tasks = tasks.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTasks(tasks);
  applyFilter();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newText = prompt("Edit task", task.text);
  if (!newText) return;
  task.text = newText;
  saveTasks(tasks);
  applyFilter();
}

function applyFilter() {
  let filtered = tasks;

  if (currentFilter === "active") {
    filtered = tasks.filter(t => !t.completed);
  } else if (currentFilter === "completed") {
    filtered = tasks.filter(t => t.completed);
  }

  renderTasks(filtered);
}

filterButtons.forEach(btn => {
  btn.onclick = () => {
    currentFilter = btn.dataset.filter;
    applyFilter();
  };
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  renderTasks(tasks.filter(t => t.text.toLowerCase().includes(q)));
});

form.addEventListener("submit", e => {
  e.preventDefault();
  addTask(input.value.trim(), dueDateInput.value, priorityInput.value);
  form.reset();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") input.value = "";
});

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

backupBtn.onclick = () => {
  navigator.clipboard.writeText(backupTasks(tasks));
  alert("Backup copied");
};

restoreBtn.onclick = () => {
  const json = prompt("Paste backup JSON");
  if (!json) return;
  tasks = restoreTasks(json);
  saveTasks(tasks);
  applyFilter();
};

let draggedId = null;

taskList.addEventListener("dragstart", e => {
  draggedId = e.target.dataset.id;
  e.target.classList.add("dragging");
});

taskList.addEventListener("dragend", e => {
  e.target.classList.remove("dragging");
});

taskList.addEventListener("dragover", e => {
  e.preventDefault();
  const target = e.target.closest("li");
  if (!target || target.dataset.id === draggedId) return;

  const from = tasks.findIndex(t => t.id === draggedId);
  const to = tasks.findIndex(t => t.id === target.dataset.id);

  const [moved] = tasks.splice(from, 1);
  tasks.splice(to, 0, moved);

  saveTasks(tasks);
  applyFilter();
});
