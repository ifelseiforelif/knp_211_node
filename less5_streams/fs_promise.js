// const simple = (val) => {
//   return new Promise((resolve, reject) => {
//     if (val > 0) resolve("val>0");
//     else reject("val<=0");
//   });
// };

// simple(-100)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

import path from "node:path";
import fs from "node:fs/promises";
import { Buffer } from "node:buffer";
const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
function createFolderIfNotExists(folderPath) {
  return fs
    .mkdir(folderPath)
    .then(() =>
      console.log(`Папка создана или она уже существует: ${folderPath}`)
    )
    .catch((error) =>
      console.error(`Ошибка при создании папки: ${error.message}`)
    );
}

function createFileWithBuffer(filePath, data) {
  return fs
    .writeFile(filePath, Buffer.from(data))
    .then(() => console.log(`Файл создан или он уже существует: ${filePath}`))
    .catch((error) =>
      console.error(`Ошибка при создании файла: ${error.message}`)
    );
}

function readFileAndLog(filePath) {
  return fs
    .readFile(filePath)
    .then((fileContent) =>
      console.log(`Содержание файла: ${fileContent.toString()}`)
    )
    .catch((error) =>
      console.error(`Ошибка при чтении файла: ${error.message}`)
    );
}

function main() {
  const folderPath = path.join(__dirname, "TestFolder");
  const filePath = path.join(folderPath, "TestFile.txt");
  const fileData = "Тестовый буффер";

  createFolderIfNotExists(folderPath)
    .then(() => createFileWithBuffer(filePath, fileData))
    .then(() => readFileAndLog(filePath))
    .catch((error) =>
      console.error(`Произошла ошибка в процессе исполнения: ${error.message}`)
    );
}

main();
// const buff = Buffer.from("Hello Node js");
// fs.writeFile(pathToFile, buff)
//     .then(() => {
//         fs.readFile(pathToFile)
//             .then((data) => console.log(data.toString()));
//     });

// fs.access(pathToFolder)
//   .then(()=>{
//     fs.mkdir(pathToFolder)
//         .then()
//         .catch()
//   })
//   .catch((err) => {
//     console.error(err);
//   });
