import { Router } from "express";
import { PostController } from "../controllers/post-controller.js";

export const postRoutes = Router();

postRoutes.route("/").post(PostController.create).get(PostController.readAll);
