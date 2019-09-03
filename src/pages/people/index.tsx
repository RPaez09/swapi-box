import React, { useEffect, useState } from 'react';

interface IPersonDisplay {
  name: string;
  homeworld: string;
  homeworld_name: string;
  population: string;
  species: any;
  species_name: string;
  language: string;
}

interface IPersonRequest {
  homeworld: RequestInfo;
  homeworld_name: string;
  population: string;
  species: RequestInfo;
  species_name: string;
  language: string;
}

export const People: React.FC = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://swapi.co/api/people/`)
      .then(response => response.json())  
      .then(response => {
        setData(response.results);
        fetchAdditional(response.results);
      })
      .catch((error) => console.log(error))  
  }, []);

  const fetchAdditional = (people: any) => {
    people.forEach((person: IPersonRequest) => {
      fetch(person.homeworld)
      .then(response => response.json())
      .then(response => {
        person.homeworld_name = response.name;
        person.population = response.population;
        setData([...people])
      })
      fetch(person.species)
        .then(response => response.json())
        .then(response => {
          person.species_name = response.name;
          person.language = response.language;
          setData([...people])
      })
    }) 
  }

  return (

    <div className="d-flex flex-wrap justify-content-around">
     
        {data ? (     
          data.map((person: IPersonDisplay, index: number) =>
          
            <div className="page-card" key={ index }>
              <h2 className="page-card-title p-2">{ person.name }</h2>
              <div className="p-2">
              <h3 className="page-card-text">
                Homeworld: { person.homeworld_name }</h3>
                <h3 className="page-card-text">Species: { person.species_name }</h3>
                <h3 className="page-card-text">Language: { person.language }</h3>
                <h3 className="page-card-text">Population: { person.population }</h3>
              </div>
            </div>
          )
        ) : <h1>loading...</h1>}
    </div>       
  )
}
