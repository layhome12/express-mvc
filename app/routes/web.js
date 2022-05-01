import express from "express";
import homeController from "../controllers/homeController.js";

const router = express.Router();

/*================================
 * Configure your router in here
 *================================
 */

router.get("/", homeController.index);

export default router;
