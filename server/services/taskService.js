const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../data/tasks.json');


const loadTasks = () => {
    const data = fs.readFileSync(tasksFilePath);
    return JSON.parse(data);
};


const getTaskById = (id) => {
    const tasks = loadTasks();
    return tasks.find(task => task.id === parseInt(id));
};


const addTask = (taskData) => {
    const tasks = loadTasks();
    const newTask = { id: tasks.length + 1, ...taskData };
    tasks.push(newTask);
    saveTasks(tasks);
    return newTask;
};


const updateTask = (id, taskData) => {
    const tasks = loadTasks();
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
    if (taskIndex === -1) {
        return null;
    }
    tasks[taskIndex] = { id: tasks[taskIndex].id, ...taskData };
    saveTasks(tasks);
    return tasks[taskIndex];
};


const deleteTask = (id) => {
    const tasks = loadTasks();
    const newTasks = tasks.filter(task => task.id !== parseInt(id));
    if (newTasks.length === tasks.length) {
        return false;
    }
    saveTasks(newTasks);
    return true;
};


const saveTasks = (tasks) => {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

module.exports = {
    loadTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask,
};
