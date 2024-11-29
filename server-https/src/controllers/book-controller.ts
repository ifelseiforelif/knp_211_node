import { Book } from "../models/book-model.js";
import { Request, Response } from "express";

export class BookController {
  static async create(
    req: Request<{}, {}, { title: string }>,
    res: Response
  ): Promise<any> {
    const book = await Book.create({ ...req.body }); //INSERT TO DB
    if (book) {
      return res
        .status(201)
        .json({ message: "Book created successfully", data: book.dataValues });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }

  static async readAll(req: Request, res: Response): Promise<any> {
    const books = await Book.findAll();
    if (books) {
      return res.status(200).json({ message: "List of books", data: books });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }

  static async readOne(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<any> {
    const id = +req.params.id;
    const book = await Book.findByPk(id);
    if (book) {
      return res.status(200).json({ message: "Book found", data: book });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}
