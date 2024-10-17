import { pool } from "../config/database.js";

const getCars = async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM cars ORDER BY id ASC`);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json( { error: error.message } );
  };
};

const getCarById = async(req, res) => {
  try {
    const selectQuery = `SELECT name, price, exterior, roof, wheels, interior, image FROM cars WHERE id = $1`;
    const carId = parseInt(req.params.carId);
    const results = await pool.query(selectQuery, [carId]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json( { error: error.message } );
  };
};

const createCar = async (req, res) => {
  try {
    const { name, price, exterior, roof, wheels, interior, image } = req.body;
    const insertQuery = `
      INSERT INTO cars (name, price, exterior, roof, wheels, interior, image)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    const results = await pool.query(insertQuery, [name, price, exterior, roof, wheels, interior, image]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json( { error: error.message } );
  };
};

const updateCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, price, exterior, roof, wheels, interior, image } = req.body;
    const updateQuery = `
      UPDATE cars
      SET name = $1, price = $2, exterior = $3, roof = $4, wheels = $5, interior = $6, image = $7
      WHERE id = $8
    `;
    const results = await pool.query(updateQuery, [name, price, exterior, roof, wheels, interior, image, id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json( { error: error.message } );
  };
};

const deleteCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deleteQuery = `DELETE from cars WHERE id = $1`;
    const results = await pool.query(deleteQuery, [id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json( { error: error.message } );
  };
};

export default {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
};