import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarsAPI from "../services/CarsAPI";
import "../App.css";

const ViewCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const fetchedCars = await CarsAPI.fetchAllCars();
      setCars(fetchedCars);
    };
    fetchCars();
  }, []);

  return (
    <div className="view-cars-container">
      <h1>All Cars</h1>
      <ul className="cars-list">
        {cars.map((car) => (
          <li key={car.id} className="car-item">
            <Link to={`/customcars/${car.id}`}>
              <img src={car.image} alt={car.name} width="100" />
              <h3>{car.name}</h3>
              <p>Price: ${car.price}</p>
            </Link>
          </li>
        ))};
      </ul>
    </div>
  );
};

export default ViewCars;
