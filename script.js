// Get elements from the DOM
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Initialize tasks array
let tasks = [];

// Function to render tasks in the UI
function renderTasks() {
  // Clear the task list
  taskList.innerHTML = '';

  // Render each task as a list item
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.innerHTML += `<span class="delete-btn" data-index="${index}">X</span>`;
    taskList.appendChild(li);
  });

  // Add event listeners to delete buttons
  const deleteButtons = document.getElementsByClassName('delete-btn');
  Array.from(deleteButtons).forEach((button) => {
    button.addEventListener('click', deleteTask);
  });
}

// Function to add a new task
function addTask(event) {
  event.preventDefault();

  // Get the task input value
  const newTask = taskInput.value;

  // Add the task to the tasks array
  tasks.push(newTask);

  // Render the updated tasks
  renderTasks();

  // Clear the input field
  taskInput.value = '';
}

// Function to delete a task
function deleteTask() {
  const index = parseInt(this.getAttribute('data-index'));

  // Remove the task from the tasks array
  tasks.splice(index, 1);

  // Render the updated tasks
  renderTasks();
}

// Event listener for form submission
taskForm.addEventListener('submit', addTask);
