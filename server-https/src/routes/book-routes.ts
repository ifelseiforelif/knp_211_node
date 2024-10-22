import { Router, Request, Response } from "express";
import { IBook } from "../interfaces/IBook.js";
import { books } from "../models/books.js";

const bookRoutes = Router();
bookRoutes.get("/", (req: Request, res: Response<IBook[]>) => {
  res.json(books);
});
bookRoutes.post("/", (req: Request<{}, {}, IBook>, res: Response) => {
  books.push(req.body);
  res.status(201).send(); //created
});
export default bookRoutes;
