import { pool } from "./database.js";
import "./dotenv.js";
import carData from "../data/cars.js";

const createCarsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE IF NOT EXISTS cars (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price NUMERIC NOT NULL,
      exterior VARCHAR(255) NOT NULL,
      roof VARCHAR(255) NOT NULL,
      wheels VARCHAR(255) NOT NULL,
      interior VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 cars table created successfully");
  } catch (err) {
    console.error("⚠️ error creating cars table", err);
  };
};

const seedCarsTable = async () => {
  await createCarsTable();
  
  carData.forEach((car) => {
    const insertQuery = {
      text: "INSERT INTO cars (name, price, exterior, roof, wheels, interior, image) VALUES ($1, $2, $3, $4, $5, $6, $7)"
    };

    const values = [
      car.name,
      car.price,
      car.exterior,
      car.roof,
      car.wheels,
      car.interior,
      car.image
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting car", err);
        return
      };
      console.log(`✅ ${car.name} added successfully`);
    });
  });
};

seedCarsTable();