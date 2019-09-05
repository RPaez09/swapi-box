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

export const Favorites: React.FC = () => {

  const [favs, setFavs] = useState(JSON.parse(localStorage.items || '{}'));

  const handleClick = (data: any) => {

    const newFavs: { [key: string]: any } = { ...favs };

    if (newFavs[data.url]) {
      delete newFavs[data.url];
    } else {
      newFavs[data.url] = data;
    }

    setFavs((favs: any) => newFavs);

    localStorage.setItem('items', JSON.stringify(newFavs));
  }

  return (

    <div className="d-flex flex-wrap justify-content-around">
      {Object.keys(favs).map(key => favs[key]).map((person: IPersonDisplay, index: number) => (

          <div
            className="page-card"
            onClick={(() => handleClick(person))}
            key={index}>
            <h2 className="page-card-title p-2">{person.name}</h2>
            <div className="p-2">
              <h3 className="page-card-text">
                Homeworld: {person.homeworld_name}</h3>
              <h3 className="page-card-text">Species: {person.species_name}</h3>
              <h3 className="page-card-text">Language: {person.language}</h3>
              <h3 className="page-card-text">Population: {person.population}</h3>
            </div>
          </div>
        )
      )}
    </div>
  );
}
