import express from "express";
import {
  createPosts,
  getPosts,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPosts);
router.patch("/:id", auth, updatePost);
router.patch("/:id/likepost", auth, likePost);
router.delete("/:id", auth, deletePost);

export default router;
