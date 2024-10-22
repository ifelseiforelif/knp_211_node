import { Router } from "express";
import { BookController } from "../controllers/book-controller.js";
export const bookRoutes = Router();
bookRoutes.route("/").post(BookController.create).get(BookController.readAll);
