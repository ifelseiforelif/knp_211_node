import { Router } from "express";
import session from "express-session";

const userRoutes = Router();

userRoutes
  .route("/signup")
  .get((req, res) => res.render("form_register"))
  .post((req, res) => {
    //TODO:валідація даних validator,yup
    // res.cookie("user", req.body.login, {
    //   httpOnly: true,
    //   maxAge: 2000000,
    // });
    req.session.user = {
      login: req.body.login,
      email: req.body.email,
    };
    res.redirect("/");
  });

userRoutes.get("/signin", (req, res) => res.render("form_auth"));

export default userRoutes;
