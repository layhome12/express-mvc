import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";

import usersController from "../controllers/api/usersController.js";
import authController from "../controllers/api/authController.js";
import validation from "../config/validation.js";

const router = express.Router();

/*===================================
 * Configure your router API in here
 *===================================
 */

//Auth Route
router.post("/auth", validation.loginForm, authController.auth);
router.get("/auth/refresh", authController.refreshAuth);
router.get("/logout", authController.logout);

// User Route
router.get("/users", verifyToken, usersController.index);
router.get("/users/:id", verifyToken, usersController.show);
router.post(
  "/users",
  [verifyToken, validation.userForm],
  usersController.store
);
router.put(
  "/users/:id",
  [verifyToken, validation.userForm],
  usersController.update
);
router.delete("/users/:id", verifyToken, usersController.destroy);

export default router;
