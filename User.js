export default class User {
  #_name;
  #_age;
  constructor(name, age) {
    this.#_name = name;
    this.#_age = age;
  }
  toString() {
    return `Name: ${this.#_name} Age: ${this.#_age}`;
  }
}

//COMMON JS Module
// module.exports = User;
// const T = 36.6;
// module.exports = { User, T };
