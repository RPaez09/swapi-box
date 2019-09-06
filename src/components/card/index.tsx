import React, { useState } from 'react';

import './styles.css';

interface ICardProps {
  title: string;
  homeworld?: string;
  species?: string;
  language?: string;
  population?: string;
  terrain?: string;
  climate?: string;
  model?: string;
  class?: string;
  passengers?: number;
  click?: any;
  url: string;
  residentList?: [];
}

export const Card: React.FC<ICardProps> = (props) => {
  const [favs, setFavs] = useState(JSON.parse(localStorage.items || '{}'));
  const favClass = (favs[props.url]) ? 'active' : null;

  const handleClick = (data: any) => {

    const newFavs: { [key: string]: any } = { ...favs};

    if (newFavs[data.url]) {
      delete newFavs[data.url];
    } else {
      newFavs[data.url] = data;
    }

    setFavs(() => newFavs);

    localStorage.setItem('items', JSON.stringify(newFavs));

    window.dispatchEvent(new StorageEvent('storage', {
      key: 'items',
    }));
  }

  return (
    <div
      className="page-card"
      onClick={(() => handleClick( props.click ))}
     >
      <h2
        className={`page-card-title ${favClass}`}
      >
        { props.title }
      </h2>
      
      <div className="p-2">

        { props.homeworld &&
          <h3 className="page-card-text">Homeworld: { props.homeworld }</h3>
        }
        {props.species &&
          <h3 className="page-card-text">Species: { props.species }</h3>
        }
        {props.terrain &&
          <h3 className="page-card-text">Terrain: { props.terrain }</h3>
        }
        {props.language &&
          <h3 className="page-card-text">Language: { props.language }</h3>
        }
        {props.population &&
          <h3 className="page-card-text">Population: { props.population }</h3>
        }
        {props.climate &&
          <h3 className="page-card-text">Climate: { props.climate }</h3>
        }
        {props.model &&
          <h3 className="page-card-text">Model: { props.model }</h3>
        }
        {props.class &&
          <h3 className="page-card-text">Class: { props.class }</h3>
        }
        {props.passengers &&
          <h3 className="page-card-text">No. of Passengers: { props.passengers }</h3>
        }

        {props.residentList &&
          <h3 className="page-card-text">Residents: <ul> {
            (props.residentList.length > 0) ? (
            props.residentList.map((resident, index: number) =>
                <li key={resident + index}>{resident}</li>
              )
            ) : <li>none</li>
          }
            </ul>
          </h3>
        }

      </div>
    </div>
  )
}
