exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product"
  });
};

exports.c = (req, res, next) => {
  const { body } = req;

  res.redirect("/");
};
