// import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.APP_TITLE, process.env.PORT);
// console.log(process.pid);
// console.log(process.argv[2]);

// const timer = setInterval(() => {
//   console.log("Node js");
// }, 0);

// setTimeout(() => {
//   clearInterval(timer);
// }, 0);

// setImmediate(() => {
//   console.log("immediate");
// });

// Promise.resolve().then(() => {
//   console.log("promise");
// });

// queueMicrotask(() => {
//   console.log("microtask");
// });

const product = {
  id: 1,
  title: "tv",
  price: 300000,
};

// const new_product = { ...product };
// product.id = 100;
// console.table(new_product);
const new_product = structuredClone(product);
product.id = 100;
console.table(new_product);
//const product2 = product;
