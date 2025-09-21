const {Pool} = require("pg")
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "petrudemian",
  database: "inventory_app",
  password: "<role_password>",
  port: 5432 // The default port
});
//module.exports = new Pool({
//  host:"dpg-d2urvdvdiees739af9ag-a",
//  user: "petru",
//  database: "messageapp_15hh",
//  password: "ZAkk8d0zUdEusUDuHRKvEiPVcg44cwxq",
//  port: 5432 // The default port
//});

