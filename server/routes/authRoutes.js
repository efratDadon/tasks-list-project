const express = require('express');
const { loginController } = require('../controllers/authController');
const router = express.Router();

/**
 * @swagger
 * /user:
 *   post:
 *     description: Login a user and return a token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized - invalid credentials
 *       400:
 *         description: Bad request - missing or invalid data
 */
router.post('/user', loginController);

module.exports = router;
