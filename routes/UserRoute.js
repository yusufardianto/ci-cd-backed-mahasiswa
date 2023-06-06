import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getHello,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/helloo", getHello);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
