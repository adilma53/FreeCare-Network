import * as postService from "../services/post.service.js";
import "dotenv/config";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

export const upload = multer({ dest: "uploads/" });

import { convertStringToInteger } from "../utils/convertStrToInt.js";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// create one
export async function createPost(req, res) {
  console.log("body---->", req.body);
  console.log("TYPE OF CATEGORY---->", typeof JSON.parse(req.body.category));
  console.log("PARSED CATEGORY---->", JSON.parse(req.body.category));

  try {
    let imageUrl;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    let image = "this is image";
    const postData = {
      ...req.body,
      image: imageUrl || image,
      claimLimit: parseInt(req.body.claimLimit),
      authorId: parseInt(req.body.authorId),
      category: JSON.parse(req.body.category),
    };

    // call the helper function to convert string values to integers

    const post = await postService.createPost(postData);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(400).send();
    }
  } catch (err) {
    console.log({ errorMessage: err.message });
    res.status(500).json({ errorMessage: err.message });
  }
}

// get one by id
export async function getPost(req, res) {
  try {
    const post = await postService.getPostById(parseInt(req.params.id));
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(400).send();
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
}

// get all
export async function getPosts(req, res) {
  try {
    const post = await postService.getAllPosts();
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(400).send();
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
}

// update one by id
export async function updatePost(req, res) {
  try {
    const post = await postService.updatePostById(
      parseInt(req.params.id),
      req.body,
    );
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(400).send();
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
}

// delete one by id
export async function deletePost(req, res) {
  try {
    const post = await postService.deletePostById(parseInt(req.params.id));
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(400).send();
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
}
