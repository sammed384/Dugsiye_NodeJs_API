import express from "express";
import { upload } from "../middlewares/upload.js";
import { uploadFile } from "../controllers/uploadController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", protect, upload.single("file"), uploadFile);

export default router;
