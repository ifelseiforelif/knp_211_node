import EventEmitter from "node:events";
import { Buyer } from "./Buyer.js";
const emitter = new EventEmitter();

const buyers = [
  new Buyer("Alex", "alex@gmail.com"),
  new Buyer("John", "john@gmail.com"),
  new Buyer("Emily", "emily@gmail.com"),
  new Buyer("Sophia", "sophia@gmail.com"),
  new Buyer("Michael", "michael@gmail.com"),
  new Buyer("Sarah", "sarah@gmail.com"),
  new Buyer("David", "david@gmail.com"),
  new Buyer("Emma", "emma@gmail.com"),
  new Buyer("Daniel", "daniel@gmail.com"),
  new Buyer("Olivia", "olivia@gmail.com"),
  new Buyer("Olivia", "olivia@gmail.com"),
  new Buyer("Olivia", "olivia@gmail.com"),
  new Buyer("Olivia", "olivia@gmail.com"),
  new Buyer("Olivia", "olivia@gmail.com"),
];

emitter.setMaxListeners(buyers.length);

buyers.forEach((buyer) =>
  emitter.on("sale", (sale) => buyer.notifyAboutSale(sale))
);
emitter.emit("sale", 20);
