import express from "express";
import prettify from "express-prettify";
import usersController from "../controllers/api/usersController.js";

const app = express();
const router = express.Router();

app.use(prettify());
app.use((req, res, next) => {
  res.type("application/json");
  next();
});

/*===================================
 * Configure your router API in here
 *===================================
 */

router.get("/users", usersController.index);
router.get("/users/:id", usersController.show);
router.post("/users", usersController.store);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.destory);

export default router;
