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
    <div className="d-flex flex-wrap">
        {data ? (
          data.map((person: any) =>
            <div className="person-card flex-grow-1" key={person.name}>
              <h2>{person.name}</h2>
              <h3 className="text-center">Homeworld: </h3>
              <h3 className="text-center">Species: </h3>
              <h3 className="text-center">Language: </h3>
              <h3 className="text-center">Population: </h3>
            </div>

          )
        ) : null}
    </div>
       
    </>
  )
}
