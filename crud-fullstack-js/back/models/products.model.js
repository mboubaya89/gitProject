const sql = require("./db.js");

// constructor
const Product = function(Product) {
  this.name = Product.name;
  this.description = Product.description;
  this.price = Product.price;
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO Product SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Product: ", { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
};

Product.findById = (id, result) => {
  sql.query(`SELECT * FROM Product WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Product: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Product with the id
    result({ kind: "not_found" }, null);
  });
};

Product.getAll = (name, result) => {
  let query = "SELECT * FROM Product";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Products: ", res);
    result(null, res);
  });
};

Product.getAllPublished = result => {
  sql.query("SELECT * FROM Product WHERE price=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Products: ", res);
    result(null, res);
  });
};

Product.updateById = (id, Product, result) => {
  sql.query(
    "UPDATE Products SET name = ?, description = ?, price = ? WHERE id = ?",
    [Product.title, Product.description, Product.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Product with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Product: ", { id: id, ...Product });
      result(null, { id: id, ...Product });
    }
  );
};

Product.remove = (id, result) => {
  sql.query("DELETE FROM Product WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Product with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Product with id: ", id);
    result(null, res);
  });
};

Product.removeAll = result => {
  sql.query("DELETE FROM Products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Products`);
    result(null, res);
  });
};

module.exports = Product;