import { Request, Response } from "express";
import { User } from "../models/user-model.js";
import { Post } from "../models/post-model.js";

export class UserController {
  static async create(
    req: Request<{}, {}, { login: string; role?: string }>,
    res: Response
  ): Promise<any> {
    const user = await User.create({ ...req.body }); //INSERT TO DB
    if (user) {
      return res
        .status(201)
        .json({ message: "User created successfully", data: user.dataValues });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }

  static async readAll(req: Request, res: Response): Promise<any> {
    const users = await User.findAll({ include: Post });
    if (users) {
      return res.status(200).json({ message: "List of users", data: users });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}
