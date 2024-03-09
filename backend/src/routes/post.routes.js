import express from "express";
import * as postController from "../controllers/post.controller.js";

const router = express.Router();
// model Post {
//     id            Int      @id @default(autoincrement())
//     title         String
//     content       String
//     image         String
//     claimLimit    Int
//     currentClaims Int      @default(0)
//     expiresAt     DateTime
//     category      Category
//     author        User     @relation(fields: [authorId], references: [id])
//     authorId      Int
//     claims        Claim[]
//   }

// enum Category {
//     FOOD
//     THERAPY
//     DOCTOR
//     SHELTER
//   }

/**
 * @swagger
 * /post/create:
 *   post:
 *     tags: [Posts]
 *     summary: Create a new post
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *               claimLimit:
 *                 type: integer
 *               category:
 *                 type: string
 *               expiresAt:
 *                  type: string
 *               authorId:
 *                  type: integer
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.post("/create", postController.createPost);

/**
 * @swagger
 * /post/{id}:
 *   get:
 *     tags: [Posts]
 *     summary: Get post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Post ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.get("/:id", postController.getPost);

/**
 * @swagger
 * /post:
 *   get:
 *     tags: [Posts]
 *     summary: Get all posts
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.get("/", postController.getPosts);

/**
 * @swagger
 * /post/{id}:
 *   put:
 *     tags: [Posts]
 *     summary: Update post by ID
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
 *         description: Post ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.put("/:id", postController.updatePost);

/**
 * @swagger
 * /post/{id}:
 *   delete:
 *     tags: [Posts]
 *     summary: Delete post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Post ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
router.delete("/:id", postController.deletePost);

export default router;
