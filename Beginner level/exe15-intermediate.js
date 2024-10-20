function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return; 
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    newTask.addEventListener('click', function() {
        newTask.classList.toggle('completed'); 
    });

    taskList.appendChild(newTask);
    taskInput.value = ''; 
}
