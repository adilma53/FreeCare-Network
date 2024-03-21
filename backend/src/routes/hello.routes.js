import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     tags: [Hello]
 *     summary: Returns 'Hello World!'
 *     description: A simple endpoint that returns 'Hello World!'.
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/:id', (req, res) => {
  res.send(`hello: ${req.params.id}`);
});

export default router;
