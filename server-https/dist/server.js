import express from "express";
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import "dotenv/config";
import { bookRoutes } from "./routes/book-routes.js";
import { connection } from "./config/config.js";
import { userRoutes } from "./routes/user-routes.js";
import { postRoutes } from "./routes/post-routes.js";
import { profileRoutes } from "./routes/profile-routes.js";
import { clientRedis } from "./config/redis-config.js";
const PORT = process.env.PORT;
const __dirname = import.meta.dirname;
const run = async () => {
    await connection.sync();
    console.log("DB connection successfully");
    await clientRedis.connect();
    console.log("Redis connection successfully");
    const app = express();
    const options = {
        key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
        cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
    };
    https
        .createServer(options, app)
        .listen(PORT, () => console.log(`Server is running https://127.0.0.1`));
    app.use(express.json());
    app.use("/books", bookRoutes);
    app.use("/users", userRoutes);
    app.use("/posts", postRoutes);
    app.use("/profiles", profileRoutes);
};
try {
    run();
}
catch (err) {
    console.error(err);
}
