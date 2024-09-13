// const arr = [3, 4.5, "hello", { id: 1, name: "Alex" }, [3, 4, 4]];
// console.log(arr[3]);
// import { log } from "node:console";
// import fs from "node:fs";
// const content = fs.readFileSync("data.txt");
// log(content);
import { Buffer } from "node:buffer";
import { log } from "node:console";
// const buffer = Buffer.alloc(8);
//const buffer = Buffer.alloc(8, "a");
//const buffer = Buffer.alloc(8, "a", "ascii");
//buffer.write("Hello World");
// console.log(buffer.toString());

// const buff1 = Buffer.from("Hello NodeJs");
// log(buff1.toString());

const bf1 = Buffer.from("abc");
const bf2 = Buffer.from("az");
// bf1.copy(bf2);
// log(bf2.toString());
log(bf1.compare(bf2));
