import React, { useState, useEffect} from 'react';

export const FilmScrollText: React.FC = () => {
  const [data, setData] = useState()

  const randomNumber = () => {
    return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
  }

  useEffect( () => {
    fetch(`https://swapi.co/api/films/${randomNumber()}/`)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(error => console.log(error))
  }, []);

  return (
    <>
      {data ? (
      <div>
        <p>{data.opening_crawl}</p>
        <p>{data.title}</p>
        <p> {data.release_date}</p>
      </div>
      
      ) : null } 
    </>
  )
}

