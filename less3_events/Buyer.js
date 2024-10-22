class Buyer {
  #_name;
  #_email;
  constructor(name, email) {
    this.#_name = name;
    this.#_email = email;
  }

  notifyAboutSale(discount) {
    console.log(
      `Name: ${this.#_name} Email: ${this.#_email}. Discount: ${discount} %`
    );
  }
}
export { Buyer };
