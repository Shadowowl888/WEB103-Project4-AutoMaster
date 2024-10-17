import { useState } from "react";
import CarsAPI from "../services/CarsAPI";
import "../App.css";

const CreateCar = () => {
  const [carData, setCarData] = useState({
    name: "",
    price: "",
    exterior: "",
    roof: "",
    wheels: "",
    interior: "",
    image: ""
  });

  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addedCar = await CarsAPI.addCar(carData);
    console.log("Car added:", addedCar);
  };

  return (
    <div>
      <h1>Create New Car</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          value={carData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={carData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="exterior"
          placeholder="Exterior"
          value={carData.exterior}
          onChange={handleChange}
        />
        <input
          type="text"
          name="roof"
          placeholder="Roof"
          value={carData.roof}
          onChange={handleChange}
        />
        <input
          type="text"
          name="wheels"
          placeholder="Wheels"
          value={carData.wheels}
          onChange={handleChange}
        />
        <input
          type="text"
          name="interior"
          placeholder="Interior"
          value={carData.interior}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={carData.image}
          onChange={handleChange}
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default CreateCar;