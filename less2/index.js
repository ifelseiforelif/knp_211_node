import "dotenv/config";
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

// const product = {
//   id: 1,
//   title: "tv",
//   price: 300000,
// };

// const new_product = { ...product };
// product.id = 100;
// console.table(new_product);
// const new_product = structuredClone(product);
// product.id = 100;
// console.table(new_product);
//const product2 = product;

// const user = {
//   id: 1,
//   name: "Oleg",
//   address: {
//     street: "Sadova",
//     ap: 20,
//   },
// };

// const new_user = structuredClone(user);
// user.address.ap = 133;
// console.table(new_user);

// const new_user = { ...user };
// user.address.ap = 133;
// console.table(new_user);

// const str = "Node JS";
// const encoding = btoa(str); //кодування base64
// console.log(encoding);
// const decoding = atob(encoding); //декодування base64
// console.log(decoding);
// const start = performance.now();
// let s = 0;
// for (let i = 0; i < 1e10; i++) {
//   s += i;
// }
// console.log(s);
// console.log(`Time: ${performance.now() - start} ms`);

// fetch(`${process.env.HOST}users`)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// fetch(`${process.env.HOST}users`, {
//   method: "POST",
//   body: JSON.stringify({
//     name: "Ruslan",
//   }),
// })
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));
