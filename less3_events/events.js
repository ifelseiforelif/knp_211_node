import EventEmitter from "node:events";

const emitter = new EventEmitter();

const listener1 = () => {
  console.log("I am list1");
};
const listener2 = () => {
  console.log("I am list2");
};
const listener3 = () => {
  console.log("I am list3 тимчасовий");
};

emitter.on("connected", listener1);
emitter.addListener("connected", listener2);
emitter.once("connected", listener3);
console.log(`Кількість підписників: ${emitter.listenerCount("connected")}`);
emitter.emit("connected");
console.log("================");
//emitter.off("connected", listener1);
emitter.removeListener("connected", listener1);
console.log(`Кількість підписників: ${emitter.listenerCount("connected")}`);
emitter.emit("connected");
console.log(`Макс кількість підписників: ${emitter.getMaxListeners()}`);
emitter.setMaxListeners(100);
console.log(`Макс кількість підписників: ${emitter.getMaxListeners()}`);
console.log(emitter.listeners("connected"));
emitter.on("disconnected", listener3);
console.log(emitter.eventNames());
console.log(emitter.rawListeners("connected"));

emitter.on("clicked", (data) => console.log(data));
emitter.emit("clicked", { title: "Cancel", color: "yellow" });
emitter.emit("clicked", { title: "Add", color: "green" });

/*
Створити клас Buyer (name, email)
Створити масив покупців
Підпистати всіх покупці (через цикл) на подію "sale"
Передавати розмір знижки
*/
