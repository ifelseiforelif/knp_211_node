import { Request, Response } from "express";
import { Post } from "../models/post-model.js";
import { User } from "../models/user-model.js";
export class PostController {
  static async create(
    req: Request<
      {},
      {},
      { title: string; description: string; user_id: string }
    >,
    res: Response
  ): Promise<any> {
    const post = await Post.create({ ...req.body }); //INSERT TO DB
    if (post) {
      return res
        .status(201)
        .json({ message: "Post created successfully", data: post.dataValues });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }

  static async readAll(req: Request, res: Response): Promise<any> {
    const posts = await Post.findAll({ include: User });
    if (posts) {
      return res.status(200).json({ message: "List of posts", data: posts });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}
