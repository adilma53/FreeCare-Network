import express from "express";
import * as userController from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create a new user
 *     description: A simple endpoint to create a new user.
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
 *               # Add other properties as per your user model
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.post("/create", userController.createUser);

// router.get("/:id", (req, res) => {
//   res.send(`hello: ${req.params.id}`);
// });

export default router;
