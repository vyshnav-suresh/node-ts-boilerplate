import { Router } from "express";
import { userController } from "../controller/user.controller";

const router = Router();

// User Routes
router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
// router.get("/users/:id", userController.getUserDetailsById);
// router.put("/users/:id", userController.updateUser);
// router.delete("/users/:id", userController.deleteUser);

export default router;
