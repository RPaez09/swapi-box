import React, { useState } from 'react';
import { Card } from '../../components/card';

interface IDataProps {
  name: string;
  homeworld?: string;
  homeworld_name?: string;
  population?: string;
  species?: any;
  species_name?: string;
  language?: string;
  url: string;
  model?: string;
  passengers?: number;
  vehicle_class?: string;
  terrain?: string;
  climate?: string;
}

export const Favorites: React.FC<IDataProps> = () => {
  const [favs] = useState(JSON.parse(localStorage.items || '{}'));

  return (

    <div className="d-flex flex-wrap justify-content-around">

      {Object.keys(favs).map(key => favs[key]).map((data: IDataProps, index: number) => (
         
         <Card
            click={ data }
            key={ index }
            title={ data.name }
            url={ data.url }
            homeworld={ data.homeworld_name}
            species={ data.species_name}
            language={ data.language}
            population={ data.population}
            model={ data.model }
            class={data.vehicle_class}
            passengers={data.passengers}
            terrain={data.terrain}
            climate={data.climate}
          >
          </Card>
        )
      )}
    </div>
  );
}
