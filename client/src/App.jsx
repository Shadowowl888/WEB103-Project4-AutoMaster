import { useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import ViewCars from "./pages/ViewCars";
import EditCar from "./pages/EditCar";
import CreateCar from "./pages/CreateCar";
import CarDetails from "./pages/CarDetails";
import "./App.css";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <CreateCar title="BOLT BUCKET | Customize" />
    },
    {
      path:"/customcars",
      element: <ViewCars title="BOLT BUCKET | Custom Cars" />
    },
    {
      path: "/customcars/:carId",
      element: <CarDetails title="BOLT BUCKET | View" />
    },
    {
      path: "/edit/:carId",
      element: <EditCar title="BOLT BUCKET | Edit" />
    }
  ]);

  return (
    <div className="app">
      <Navigation />
      { element }
    </div>
  );
};

export default App;