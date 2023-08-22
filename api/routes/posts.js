import express from "express";
import {AddPost,DeletePost, GetPost, GetPosts,UpdatePost,} from "../controllers/postController.js";

const router = express.Router();

router.get("/", GetPosts);
router.get("/:id", GetPost);
router.post("/", AddPost);
router.delete("/:id", DeletePost);
router.put("/:id", UpdatePost);

export default router;