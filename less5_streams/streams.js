import path from "node:path";
import fs from "node:fs";
import { setTimeout } from "node:timers/promises";
const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
const pathToNewFile = path.join(pathToFolder, "new_data.txt");
const readStream = fs.createReadStream(pathToFile);
const writeStream = fs.createWriteStream(pathToNewFile);

readStream.on("data", (chunk) => {
  console.log(`Chunk start...\n`);
  console.log(chunk);
  console.log(chunk.length);
  console.log(`Chunk end...\n`);
  //writeStream.write(chunk, (err) => {});
  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 7000);
});
readStream.on("open", () => {
  console.log("File was opened");
});
readStream.on("close", () => {
  console.log("File was closed");
});
readStream.on("end", () => {
  console.log("The end");
});
