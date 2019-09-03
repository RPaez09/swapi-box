import React, { useState, useEffect } from 'react';

interface IVehicleDisplay {
  name: string;
  model: string;
  vehicle_class: string;
  passengers: number;
}

export const Vehicles: React.FC = () => {
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
          data.map((vehicle: IVehicleDisplay) =>
            <div className="page-card" key={vehicle.name}>
              <h2 className="page-card-title p-2">{vehicle.name}</h2>
              <div className="p-2">
                <h3 className="page-card-text">Model: {vehicle.model}</h3>
                <h3 className="page-card-text">Class: {vehicle.vehicle_class} </h3>
                <h3 className="page-card-text">No. of Passengers: {vehicle.passengers} </h3>
              </div>
            </div>

          )
        ) : null}
      </div>

    </>
  )
}
