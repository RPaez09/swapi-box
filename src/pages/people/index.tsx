import React, { useEffect, useState } from 'react';

interface IPerson {
  name: string;
  homeworld: string;
  homeworld_name: string;
  population: string;
}

export const People: React.FC = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://swapi.co/api/people/`)
      .then(response => response.json())    
      .then(response => (response.results).forEach((person: IPerson) => {
        fetch(person.homeworld)
            .then(r => r.json())
            .then(r => setData([
              ...response.results,
              person.homeworld_name = r.name,
              person.population = r.population
            ]))
        }))
      .catch(error => console.log(error))

  }, []);

  return (
    
    <>
    <div className="d-flex flex-wrap justify-content-around">
     
        {data ? (
          
          data.map((person: IPerson, index: number) =>
          
            <div className="page-card" key={ index }>
              <h2 className="page-card-title p-2">{ person.name }</h2>
              <div className="p-2">
              <h3 className="page-card-text">
                Homeworld:{ person.homeworld_name }</h3>
                <h3 className="page-card-text">Species: </h3>
                <h3 className="page-card-text">Language: </h3>
                <h3 className="page-card-text">Population: { person.population }</h3>
              </div>
            </div>
          )
        ) : null}
    </div>
       
    </>
  )
}
