import express from "express";

import { login, signup } from "../controllers/auth.jsx";
import { getAllUsers, updateProfile } from "../controllers/users.jsx";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

export default router;
