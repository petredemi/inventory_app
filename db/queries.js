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
    if(manufacturer != ''){
    await pool.query("INSERT INTO cars (manufacturer, country, continent) VALUES ($1, $2, $3)", [manufacturer, country, continent])
    }
  }
exports.newModel = async (brand, model, type, seats) => {
    await pool.query("INSERT INTO brands (brand, model, type, seats) VALUES ($1, $2, $3, $4)", [brand, model, type, seats])
}
exports.getModeltoUpdate = async (x) => {
  const { rows } = await pool.query("SELECT * FROM brands WHERE id = ($1)", [x]);
  return rows;
}
exports.postModelUpdated = async (id, model, type, seats) => {
    await pool.query("UPDATE brands SET model = ($1), type = ($2), seats = ($3) WHERE id = ($4)", [model, type, seats, id]);
}
exports.deleteBrand = async (id) =>{
  await pool.query(`DELETE FROM cars WHERE id = ${id}`)
}
exports.deleteModel = async (id) => {
  await pool.query("DELETE FROM brands WHERE id = ($1)", [id])
}

//async function main(){
////   const {rows} = await pool.query("SELECT * FROM cars WHERE manufacturer =($1)", [x]);
//   await pool.query(`UPDATE brands SET model = 'xx', type = 11, seats = 1 WHERE id = 1`)
////   console.log(rows[0])
//}
//main()