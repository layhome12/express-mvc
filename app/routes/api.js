import express from "express";
import usersController from "../controllers/api/usersController.js";

const app = express();
const router = express.Router();

/*===================================
 * Configure your router API in here
 *===================================
 */

// --> User
router.get("/users", usersController.index);
router.get("/users/:id", usersController.show);
router.post("/users", usersController.store);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.destory);

export default router;
