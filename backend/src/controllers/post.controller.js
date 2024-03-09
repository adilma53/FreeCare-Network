// import * as postService from "../services/post.service.js";

// // create one ✅
// export async function createPost(req, res) {
//   try {
//     const post = await postService.createPost(req.body);
//     if (post) {
//       res.status(200).json(post);
//     } else {
//       res.status(400).send();
//     }
//   } catch (err) {
//     res.status(500).json({ errorMessage: err.message });
//   }
// }

// // get one by id
// export async function getPost(req, res) {
//   try {
//     const post = await postService.getPostById(req.params.id);
//     if (post) {
//       res.status(200).json(post);
//     } else {
//       res.status(400).send();
//     }
//   } catch (err) {
//     res.status(500).json({ errorMessage: err.message });
//   }
// }

// // get all
// export async function getPosts(req, res) {
//   try {
//     const post = await postService.getAllPosts();
//     if (post) {
//       res.status(200).json(post);
//     } else {
//       res.status(400).send();
//     }
//   } catch (err) {
//     res.status(500).json({ errorMessage: err.message });
//   }
// }

// // update one by id
// export async function createPost(req, res) {
//   try {
//     const post = await postService.createPost(req.body);
//     if (post) {
//       res.status(200).json(post);
//     } else {
//       res.status(400).send();
//     }
//   } catch (err) {
//     res.status(500).json({ errorMessage: err.message });
//   }
// }

// // delete one by id
// export async function deletePost(req, res) {
//   try {
//     const post = await postService.deletePostById(req.params.id);
//     if (post) {
//       res.status(200).json(post);
//     } else {
//       res.status(400).send();
//     }
//   } catch (err) {
//     res.status(500).json({ errorMessage: err.message });
//   }
// }
