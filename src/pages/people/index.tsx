import React, { useEffect, useState } from 'react';

import './styles.css';

export const People: React.FC = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://swapi.co/api/people/`)
      .then(response => response.json())
      .then(response => setData(response.results))
      .catch(error => console.log(error))
  }, []);

  return (
    <>
    <div className="d-flex flex-wrap justify-content-around">
        {data ? (
          data.map((person: any) =>
            <div className="page-card" key={person.name}>
              <h2 className="page-card-title p-2">{person.name}</h2>
              <div className="p-2">
                <h3 className="page-card-text">Homeworld: </h3>
                <h3 className="page-card-text">Species: </h3>
                <h3 className="page-card-text">Language: </h3>
                <h3 className="page-card-text">Population: </h3>
              </div>
            </div>
          )
        ) : null}
    </div>
       
    </>
  )
}
