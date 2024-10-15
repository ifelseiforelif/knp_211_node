import mysql from "mysql2";

const connection = mysql.createConnection({
  //TODO: .env
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "knp211",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
    connection.query(
      "INSERT INTO books (title, pages) VALUES(?,?)",
      ["my new book", 255],
      (err, res) => {
        if (err == null) {
          console.log(res);
        }
      }
    );
    connection.query(
      "SELECT * FROM books WHERE id>? AND id<=?",
      [2, 10],
      (err, res) => {
        if (err) console.log(err);
        else console.log(res);
      }
    );
  }
});
