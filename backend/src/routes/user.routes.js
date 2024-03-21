import express from 'express';
import * as userController from '../controllers/user.controller.js';

const router = express.Router();

/**
 * @swagger
 * /user/create:
 *   post:
 *     tags: [User]
 *     summary: Create a new user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.post('/create', userController.createUser);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags: [User]
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.get('/:id', userController.getUser);

/**
 * @swagger
 * /user:
 *   get:
 *     tags: [User]
 *     summary: Get all users
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.get('/', userController.getUsers);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     tags: [User]
 *     summary: Update user by ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.put('/:id', userController.updateUser);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     tags: [User]
 *     summary: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.delete('/:id', userController.deleteUser);

export default router;
