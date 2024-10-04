import { users } from "../data/users.js";
import bcrypt from "bcrypt";

export const checkUser = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user.login;
  }
  next();
};

export const createUser = (req, res, next) => {
  if (
    req.body &&
    req.body.answer &&
    req.body.login &&
    req.body.email &&
    req.body.password &&
    req.body.confirm_password &&
    req.body.password === req.body.confirm_password
  ) {
    const { login, email, password } = req.body;
    const user = users.find((el) => el.login === login || el.email === email);
    if (!user) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      users.push({
        id: users.length + 1,
        login: login,
        email: email,
        password: hash,
      });
      next();
      return;
    }
  }
  res.status(400).redirect("/");
};
