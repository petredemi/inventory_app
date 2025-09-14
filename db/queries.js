const pool = require("./pool");

exports.getManufacturers = async () => {
  const { rows } = await pool.query("SELECT * FROM cars");
  return rows;
}
exports.getManufacturer = async (brandId) => {
  const { rows } = await pool.query(`SELECT * FROM cars WHERE id = ${brandId}`);
  return rows;
}
exports.getCheck = async (x) => {
  const { rows } = await pool.query("SELECT * FROM cars WHERE manufacturer = ($1)", [x]);
  return rows[0];
}
exports.getModels = async (x) => {
  const { rows } = await pool.query("SELECT * FROM brands WHERE brand = ($1)", [x]);
  return rows;
}
exports.newManufacturerAdd = async (manufacturer, country, continent) => {
    await pool.query("INSERT INTO cars (manufacturer, country, continent) VALUES ($1, $2, $3)", [manufacturer, country, continent])
}
exports.newModel = async (brand, model, type, seats) => {
    await pool.query("INSERT INTO brands (brand, model, type, seats) VALUES ($1, $2, $3, $4)", [brand, model, type, seats])
}

exports.deleteBrand = async (id) =>{
  await pool.query(`DELETE FROM cars WHERE id = ${id}`)
  //let {persons} =  await pool.query("SELECT * FROM messages");
  //console.log(persons)
}
//exports.getMessage = async (mId) => {
//  const {rows} = await pool.query(`SELECT * FROM messages WHERE id =${mId};`)
////  console.log(rows)
//   return rows;
//}
//exports.newMessage = async (messageuser, messagetext) => {
//   pool.query("INSERT INTO messages (messageuser, messagetext, added) VALUES($1, $2, $3)", [messageuser, messagetext, added]);
//   }
//exports.deleteMessage = async (id) =>{
//  await pool.query(`DELETE FROM messages WHERE id = ${id}`)
//  //let {persons} =  await pool.query("SELECT * FROM messages");
//  //console.log(persons)
//}
//sync function main(x){
//   const {rows} = await pool.query("SELECT * FROM cars WHERE manufacturer =($1)", [x]);
//   
//   console.log(rows[0])
//
//ain('Mercededs')