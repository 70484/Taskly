document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const taskCountDisplay = document.getElementById('taskCount');

    let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

    const init = () => { renderTasks(); updateCounter(); };

    const renderTasks = () => {
        if (!taskList) return;
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const article = document.createElement('article');
            article.className = 'task-card';
            article.style.animation = 'fadeIn 0.5s ease forwards';
            article.innerHTML = `
                <div class="task-content">
                    <h3>Zadanie #${index + 1}</h3>
                    <p>${task.text}</p>
                </div>
                <button class="delete-btn">Usuń</button>
            `;
            article.querySelector('.delete-btn').addEventListener('click', () => deleteTask(index));
            taskList.appendChild(article);
        });
    };

    const addTask = () => {
        const text = taskInput.value.trim();
        if (text === "") {
            alert("Wpisz treść zadania!");
            return;
        }
        tasks.push({ text: text });
        saveAndSync();
        taskInput.value = '';
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        saveAndSync();
    };

    const saveAndSync = () => {
        localStorage.setItem('myTasks', JSON.stringify(tasks));
        renderTasks();
        updateCounter();
    };

    const updateCounter = () => {
        if (taskCountDisplay) taskCountDisplay.textContent = tasks.length;
    };

    if (addTaskBtn) addTaskBtn.addEventListener('click', addTask);
    if (taskInput) taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });

    init();
});