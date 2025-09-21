const {Pool} = require("pg")
//module.exports = new Pool({
//  host: "localhost", // or wherever the db is hosted
//  user: "petrudemian",
//  database: "inventoryapp",
//  password: "<role_password>",
//  port: 5432 // The default port
//});
//module.exports = new Pool({
//  host:"dpg-d2urvdvdiees739af9ag-a",
//  user: "petru",
//  database: "messageapp_15hh",
//  password: "ZAkk8d0zUdEusUDuHRKvEiPVcg44cwxq",
//  port: 5432 // The default port
//});
module.exports = new Pool({
  host: "ep-little-base-a2wm2x79.eu-central-1.pg.koyeb.app", // or wherever the db is hosted
  user: "koyeb-adm",
  database: "koyebdb",
  password: "npg_djYLHq3UVa2T",
  port: 5432 // The default port
});
