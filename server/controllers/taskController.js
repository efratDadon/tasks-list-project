const taskService = require('../services/taskService');

const getTasks = (req, res) => {
    try {
        const tasks = taskService.loadTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Failed to load tasks' });
    }
};


const getTaskById = (req, res) => {
    try {
        const task = taskService.getTaskById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Failed to load task' });
    }
};


const createTask = (req, res) => {
    try {
        const newTask = taskService.addTask(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add task' });
    }
};


const updateTask = (req, res) => {
    try {
        const updatedTask = taskService.updateTask(req.params.id, req.body);
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update task' });
    }
};


const deleteTask = (req, res) => {
    try {
        const isDeleted = taskService.deleteTask(req.params.id);
        if (!isDeleted) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete task' });
    }
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
