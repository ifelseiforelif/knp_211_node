import { Request, Response } from "express";
import { User } from "../models/user-model.js";
import { Profile } from "../models/profile-model.js";
export class ProfileController {
  static async create(
    req: Request<
      {},
      {},
      { city: string; detail_info: string; user_id: string }
    >,
    res: Response
  ): Promise<any> {
    const profile = await Profile.create({ ...req.body }); //INSERT TO DB
    if (profile) {
      return res.status(201).json({
        message: "Profile created successfully",
        data: profile.dataValues,
      });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }

  static async readAll(req: Request, res: Response): Promise<any> {
    const profiles = await Profile.findAll({ include: User });
    if (profiles) {
      return res
        .status(200)
        .json({ message: "List of profiles", data: profiles });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}
