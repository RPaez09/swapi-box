import React, { useState, useEffect} from 'react';

import './styles.css';

export const FilmScrollText: React.FC = () => {
  const [data, setData] = useState()

  const randomNumber = () => {
    return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
  }

  useEffect( () => {
    fetch(`https://swapi.co/api/films/${randomNumber()}/`)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(error => console.error(error))
  }, []);

  return (
    <>
      {data ? (
        <div className = "wrapper" >
          <div className="inner-wrapper animated p-2">
            <div>
              <p className="text">{data.opening_crawl}</p>
              <p className="title text-uppercase">{data.title}</p>
              <p className="subtitle"> {data.release_date}</p>
            </div>
          </div>
        </div>
        ) : null } 
     </>
  )
}

