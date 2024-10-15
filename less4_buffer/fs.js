import fs from "node:fs";
import path from "node:path";
import { log } from "node:console";
const __dirname = import.meta.dirname;
const our_dir = path.join(__dirname, "files");
const our_file = path.join(our_dir, "data.txt");

const buffer = Buffer.from(`Hello from Node js\n`);
fs.writeFile(our_file, buffer, (err) => {
  if (err) {
    log(err);
  } else {
    fs.readFile(our_file, (err, data) => {
      if (err) {
        log(err);
      } else {
        log(data.toString());
      }
    });
  }
});
