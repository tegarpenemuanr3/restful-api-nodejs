const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

// parse application/json
app.use(bodyParser.json());

// create database connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restful_db",
});

// connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

//tampilkan semua data product
app.get("/api/products", (req, res) => {
  let sql = "SELECT * FROM products";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ status: 200, error: null, response: results });
  });
});

//tampilkan data product berdasarkan id
app.get("/api/products/:id", (req, res) => {
  let sql = "SELECT * FROM products WHERE product_id=" + req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ status: 200, error: null, response: results });
  });
});

//Tambahkan data product baru
app.post("/api/products", (req, res) => {
  let data = {
    product_name: req.body.product_name,
    product_price: req.body.product_price,
  };
  let sql = "INSERT INTO products SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.json({ status: 200, error: null, response: req.body });
  });
});

//Edit data product berdasarkan id
app.put("/api/products/:id", (req, res) => {
  let sql =
    "UPDATE products SET product_name='" +
    req.body.product_name +
    "', product_price='" +
    req.body.product_price +
    "' WHERE product_id=" +
    req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ status: 200, error: null, response: req.body });
  });
});

//Delete data product berdasarkan id
app.delete("/api/products/:id", (req, res) => {
  let sql = "DELETE FROM products WHERE product_id=" + req.params.id + "";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ status: 200, error: null, response: results });
  });
});

//Server listening
app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
