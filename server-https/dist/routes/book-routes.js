import { Router } from "express";
import { books } from "../models/books.js";
const bookRoutes = Router();
bookRoutes.get("/", (req, res) => {
    res.json(books);
});
bookRoutes.post("/", (req, res) => {
    books.push(req.body);
    res.status(201).send(); //created
});
export default bookRoutes;
