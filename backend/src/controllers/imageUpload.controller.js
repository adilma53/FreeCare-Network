import "dotenv/config";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

export const upload = multer({ dest: "uploads/" });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload an image and get its URL
export async function uploadImage(req, res) {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const url = result.secure_url;

    res.status(200).send({ url });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to upload image.");
  }
}
