const express = require("express");
const app = express();
const path = require("node:path");
const { Router } = require("express");
const router = Router();
const routerInventory = require('./routes/appRoutes')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', routerInventory)

app.use((err, req, res, next) => {
  console.error(err);
  // You will see an OH NO! in the page, with a status code of 500 that can be seen in the network tab of the dev tools
  res.status(500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {

   if (error) {
    throw error;
  }
  console.log(`inventoryapp ${PORT}!`);
  
});