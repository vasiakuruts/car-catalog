import { useEffect, useState } from "react";
import CarItem from "./car-item/CarItem.jsx";
//import { cars as carsData } from "./cars.data.js";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import { CarService } from "../../../services/car.service.js";
import { useNavigate } from "react-router-dom";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll();

      setCars(data);
    };

    fetchData();
  }, []);

  const nav = useNavigate();

  return (
    <>
      <div>
        <h1>Cars catalog</h1>
        <button onClick={() => nav("/car/1")}>GO</button>
        <CreateCarForm setCars={setCars} />
        <div>
          {cars.length ? (
            cars.map((car) => <CarItem key={car.id} car={car} />)
          ) : (
            <p>There are no cars</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;