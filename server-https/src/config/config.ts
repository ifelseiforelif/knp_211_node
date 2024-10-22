import { Sequelize } from "sequelize-typescript";
import { Book } from "../models/book-model.js";

export const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "knp211",
  models: [Book], //додати models!!!
});
