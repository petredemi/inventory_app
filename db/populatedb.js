#! /usr/bin/env node
const pool = require("./pool");
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    manufacturer VARCHAR(255),
    country VARCHAR(255),
    continent VARCHAR(255)
);
INSERT INTO cars (manufacturer, country, continent) 
VALUES ('Mercedes', 'Germany', 'Europe');
`;
const BRAND = `
  CREATE TABLE IF NOT EXISTS brands (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    brand VARCHAR(255),
    model VARCHAR(255),
    type VARCHAR(255),
    seats VARCHAR(255)
);
INSERT INTO brands (brand, model, type, seats) 
VALUES ('Mercedes', 'xx', 'petrol', '5');
`
async function main() {
  const client = new Client({
      connectionString: "postgresql://petrudemian:<role_password>@localhost:5432/inventory_app",
  });
    
  await client.connect();
  await client.query(SQL);
  await client.query(BRAND);
  await client.end();
}
main();

