/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CarService } from "../../../services/car.service";
import CarItem from "../home/car-item/CarItem";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  if (!id) return;

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getById(id);

      setCar(data);
    };

    fetchData();
  }, [id]);
  if (!car?.name) return <p>Loading...</p>;

  return (
    <div>
      <Link className="btn" to="/">
        Back
      </Link>
      <CarItem car={car} />
    </div>
  );
};

export default CarDetail;
