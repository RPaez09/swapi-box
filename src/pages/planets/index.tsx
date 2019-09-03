import React, { useState, useEffect } from 'react';

interface IPlanetDisplay {
  name: string;
  terrain: string;
  population: string;
  climate: string;
}

export const Planets: React.FC = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://swapi.co/api/planets/`)
      .then(response => response.json())
      .then(response => setData(response.results))
      .catch(error => console.log(error))
  }, []);
  return (
    <>
      <div className="d-flex flex-wrap justify-content-around">
        {data ? (
          data.map((planet: IPlanetDisplay) =>
            <div className="page-card" key={planet.name}>
              <h2 className="page-card-title p-2">{planet.name}</h2>
              <div className="p-2">
                <h3 className="page-card-text">Terrain: {planet.terrain}</h3>
                <h3 className="page-card-text">Population: {planet.population} </h3>
                <h3 className="page-card-text">Climate: {planet.climate} </h3>
                <h3 className="page-card-text">Residents: </h3>
              </div>
            </div>
          )
        ) : null}
      </div>

    </>
  )
}
