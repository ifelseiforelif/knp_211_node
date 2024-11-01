import { Request, Response } from "express";
import { User } from "../models/user-model.js";
import { Post } from "../models/post-model.js";
import { Profile } from "../models/profile-model.js";
import { clientRedis } from "../config/redis-config.js";

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
    const usersFromRedis = await clientRedis.get("users");
    if (usersFromRedis) {
      console.log("Reading redis....");
      return res
        .status(200)
        .json({ message: "List of users", data: JSON.parse(usersFromRedis) });
    }
    //const users = await User.findAll({ include: [Post, Profile] });
    const users = await User.scope("userUsers").findAll();
    if (users) {
      console.log("Writing redis....");
      await clientRedis.set("users", JSON.stringify(users), { EX: 60 });
      return res.status(200).json({ message: "List of users", data: users });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}
