import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

import { validate } from "../middlewares/validateZod.js";
import { createUserSchema } from "../schemas/userSchema.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", validate(createUserSchema), createUser); // 🔒 Validates input
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
