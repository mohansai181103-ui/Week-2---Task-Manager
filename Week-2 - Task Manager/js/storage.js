function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function backupTasks(tasks) {
  return JSON.stringify(tasks);
}

function restoreTasks(json) {
  return JSON.parse(json);
}
