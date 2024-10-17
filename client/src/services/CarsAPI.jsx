const fetchAllCars = async () => {
  const response = await fetch("/api/cars");
  const data = await response.json();
  return data;
};

const fetchCarById = async (carId) => {
  const response = await fetch(`/api/cars/${carId}`);
  const data = await response.json();
  return data;
};

const addCar = async (carData) => {
  const response = await fetch("/api/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  });
  const data = await response.json();
  return data;
};

const updateCar = async (carId, carData) => {
  const response = await fetch(`/api/cars/${carId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  });
  const data = await response.json();
  return data;
};

const deleteCar = async (carId) => {
  const response = await fetch(`/api/cars/${carId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

const CarsAPI = {
  fetchAllCars,
  fetchCarById,
  addCar,
  updateCar,
  deleteCar,
};

export default CarsAPI;