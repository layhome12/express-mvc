import express from "express";
import usersController from "../controllers/api/usersController.js";

const router = express.Router();

/*===================================
 * Configure your router API in here
 *===================================
 */

// User Route
router.get("/users", usersController.index);
router.get("/users/:id", usersController.show);
router.post("/users", usersController.store);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.destroy);

export default router;
