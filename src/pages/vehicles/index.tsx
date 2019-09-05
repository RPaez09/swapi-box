import React, { useState, useEffect } from 'react';
import { Card } from '../../components/card';

interface IVehicleProps {
  name: string;
  model: string;
  vehicle_class: string;
  passengers: number;
}

export const Vehicles: React.FC<IVehicleProps> = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://swapi.co/api/vehicles/`)
      .then(response => response.json())
      .then(response => setData(response.results))
      .catch(error => console.log(error))
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap justify-content-around">
        {data ? (
          data.map((vehicle: IVehicleProps, index: number) =>
          <Card
            click={ vehicle }
            title={ vehicle.name }
            key={ index }
            model={ vehicle.model }  
            class={ vehicle.vehicle_class }
            passengers={ vehicle.passengers }
          >
          </Card>
          )
        ) : <h1>Loading...</h1>}
      </div>

    </>
  )
}
