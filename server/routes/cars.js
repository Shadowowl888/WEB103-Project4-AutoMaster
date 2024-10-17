import express from "express";
import CarsController from "../controllers/cars.js";

const router = express.Router();

router.get("/", CarsController.getCars);
router.get("/:carId", CarsController.getCarById);
router.post("/", CarsController.createCar);
router.delete("/:carId", CarsController.deleteCar);
router.put("/:carId", CarsController.updateCar);

export default router;