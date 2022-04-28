import express from "express";
import { Home } from "../controllers/usersController.js";

const router = express.Router();

/*================================
 * Configure your router in here
 *================================
 */

router.get("/", Home);

export default router;
