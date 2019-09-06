import React, { useState, useEffect } from 'react';
import { Card } from '../../components/card';
import { Loader } from '../../components/loader';

interface IPlanetProps {
  name: string;
  terrain: string;
  population: string;
  climate: string;
  residentList: [];
  url: string;
}

export const Planets: React.FC<IPlanetProps> = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://swapi.co/api/planets/`)
      .then(response => response.json())
      .then(response => {
        setData(response.results)
        fetchAdditional(response.results)
      })
      .catch(error => console.error(error))
  }, []);

  const fetchAdditional = (planets: any) => {
    planets.forEach((planet: any) => {      
      planet.residentList = [];
      planet.residents.forEach((resident: any) =>{
          fetch(resident)
          .then(response => response.json())
          .then(response => {
            planet.residentList.push(response.name)
            setData([...planets])
          })
          .catch(error => console.error(error));
      })
    });
  }
  return (
    
      <div className="d-flex flex-wrap justify-content-around">
        {data ? (
          data.map((planet: IPlanetProps, index: number) =>

              <Card
                click={ planet }
                title={ planet.name }
                key={ index }
                terrain={ planet.terrain }
                population={ planet.population }
                climate={ planet.climate }
                url={ planet.url }
                residentList={ planet.residentList }
              >
              </Card>
          )
        ) : <Loader></Loader>
      }
    </div>
  )
}
