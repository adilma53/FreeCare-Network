import express from "express";
import * as userController from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * /user/create:
 *   post:
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
router.post("/create", userController.createUser);

router.get("/:id", userController.getUser);

router.get("/", userController.getUsers);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

// get one by id

// get all

// update one by id

// delete one by id

// router.get("/:id", (req, res) => {
//   res.send(`hello: ${req.params.id}`);
// });

export default router;
