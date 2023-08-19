import express  from "express";
import { AddUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", AddUser )

export default router;