import { Router } from "express";
import { createUser } from "../middlewares/user-middleware.js";
import { users } from "../data/users.js";

const userRoutes = Router();

userRoutes
  .route("/signup")
  .get((req, res) => res.render("form_register"))
  .post(createUser, (req, res) => {
    req.session.user = {
      login: req.body.login,
      email: req.body.email,
    };
    res.redirect("/");
  });

userRoutes.get("/signin", (req, res) => res.render("form_auth"));
userRoutes.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(); //знищення сессії
  }
  res.redirect("/");
});

export default userRoutes;
