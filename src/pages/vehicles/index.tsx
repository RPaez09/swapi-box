import React, { useState, useEffect } from 'react';

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
      <div className="d-flex flex-wrap">
        {data ? (
          data.map((vehicle: any) =>
            <div className="person-card flex-grow-1" key={vehicle.name}>
              <h2>{vehicle.name}</h2>
              <h3 className="text-center">Model: {vehicle.model}</h3>
              <h3 className="text-center">Class: {vehicle.vehicle_class} </h3>
              <h3 className="text-center">No. of Passengers: {vehicle.passengers} </h3>
            </div>

          )
        ) : null}
      </div>

    </>
  )
}
