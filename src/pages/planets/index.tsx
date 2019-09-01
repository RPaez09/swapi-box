import React, { useState, useEffect } from 'react';

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
      <div className="d-flex flex-wrap">
        {data ? (
          data.map((planet: any) =>
            <div className="person-card flex-grow-1" key={planet.name}>
              <h2>{planet.name}</h2>
              <h3 className="text-center">Terrain: {planet.terrain}</h3>
              <h3 className="text-center">Population: {planet.population} </h3>
              <h3 className="text-center">Climate: {planet.climate} </h3>
              <h3 className="text-center">Residents: </h3>
            </div>

          )
        ) : null}
      </div>

    </>
  )
}
