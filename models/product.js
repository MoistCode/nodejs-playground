const products = [];

module.exports = class Product {
  static fetchAll() {
    return products;
  }

  constructor({ title }) {
    this.title = title;
  }

  save() {
    products.push(this);
    return this;
  }
};
