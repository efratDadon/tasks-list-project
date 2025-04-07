const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

/**
 * @swagger
 * /tasks:
 *   get:
 *     description: Get all tasks
 *     responses:
 *       200:
 *         description: A list of tasks
 */
router.get('/', taskController.getTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     description: Get task by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Task ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A task object
 */
router.get('/:id', taskController.getTaskById);

/**
 * @swagger
 * /tasks:
 *   post:
 *     description: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created
 */
router.post('/', taskController.createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     description: Update a task
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Task ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task updated
 */
router.put('/:id', taskController.updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     description: Delete a task
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Task ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task deleted
 */
router.delete('/:id', taskController.deleteTask);

module.exports = router;
