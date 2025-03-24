const taskInputElement = document.getElementById("task-input");
const taskAddButtonElement = document.getElementById("add-task-button");
const taskListElement = document.getElementById("task-list");

taskAddButtonElement.onclick = () => {
  const value = taskInputElement.value;
  console.log(value);
};
