import express from "express";

const router = express.Router();

//import controllers
import { getAllUsers, getUser } from "../controllers";

router.route("/:id").get(getUser);

// protect the routes below
router.route("/").get(getAllUsers);

export { router as userRouter };
