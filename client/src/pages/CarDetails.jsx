import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CarsAPI from "../services/CarsAPI";
import "../App.css";

const CarDetails = () => {
  const { carId } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const getCarDetails = async () => {
      const fetchedCar = await CarsAPI.fetchCarById(carId);
      setCar(fetchedCar);
    };
    getCarDetails();
  }, [carId]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="car-details-container">
      <div className="car-details">
        <h1>{car.name}</h1>
        <img src={car.image} alt={car.name} width="300" />
        <p>Price: ${car.price}</p>
        <p>Exterior: {car.exterior}</p>
        <p>Roof: {car.roof}</p>
        <p>Wheels: {car.wheels}</p>
        <p>Interior: {car.interior}</p>

        <Link to={`/edit/${carId}`}>
          <button>Edit Car</button>
        </Link>
      </div>
    </div>
  );
};

export default CarDetails;