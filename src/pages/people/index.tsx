import React, { useEffect, useState } from 'react';
import { Card } from '../../components/card';
import { Loader } from '../../components/loader';

interface IPersonProps {
  name: string;
  homeworld: string;
  homeworld_name: string;
  population: string;
  species: any;
  species_name: string;
  language: string;
  url: string;
}

interface IPersonRequest {
  homeworld: RequestInfo;
  homeworld_name: string;
  population: string;
  species: RequestInfo;
  species_name: string;
  language: string;
}

export const People: React.FC<IPersonProps>= () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://swapi.co/api/people/`)
      .then(response => response.json())  
      .then(response => {
        setData(response.results);
        fetchAdditional(response.results);
      })
      .catch((error) => console.error(error))  
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
      .catch((error) => console.error(error))
      fetch(person.species)
        .then(response => response.json())
        .then(response => {
          person.species_name = response.name;
          person.language = response.language;
          setData([...people])
      })
      .catch((error) => console.error(error))
    }) 
  }

  return (
    
    <div className="d-flex flex-wrap justify-content-around">
        {data ? (     
        data.map((person: IPersonProps, index: number) =>
              <Card
                url={ person.url }
                key={ index }
                click={ person }
                title={ person.name }
                homeworld={ person.homeworld_name }
                species={ person.species_name }
                language={ person.language }
                population={ person.population }>
              </Card>
          )
        ) : <Loader></Loader> 
      }
    </div>       
  )
}
