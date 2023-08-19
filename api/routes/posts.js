import express from "express";
import { AddPost } from "../controllers/postController.js";

const router = express.Router();

router.get("/", AddPost)

export default router;