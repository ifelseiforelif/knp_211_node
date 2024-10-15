import fs from "node:fs";
import path from "node:path";
import { log } from "node:console";
const __dirname = import.meta.dirname;
const our_dir = path.join(__dirname, "files");
if (!fs.existsSync(our_dir)) {
  fs.mkdirSync(our_dir); //створення папки
}
const our_file = path.join(our_dir, "data.txt");
const buffer = Buffer.from(`Hello from Node js\n`);
//fs.writeFileSync(our_file, buffer);
fs.appendFileSync(our_file, buffer);
const content = fs.readFileSync(our_file, { encoding: "utf-8" });
log(content);
fs.unlinkSync(our_file);
fs.rmSync(our_dir, { recursive: true });
