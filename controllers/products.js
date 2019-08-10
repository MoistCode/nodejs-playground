const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  const product = Product.fetchAll();

  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product"
  });
};

exports.postAddProducts = (req, res, next) => {
  const { body } = req;

  const product = new Product(req.body.title);
  Product.save();

  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { products });
};
