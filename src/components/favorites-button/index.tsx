import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const FavoritesButton: React.FC = () => {
  const [favoriteNumber, setFavoriteNumber] = useState(0);

  useEffect(() => {
    const listener = () => {
      const favs = JSON.parse(localStorage.items || '{}');

      setFavoriteNumber(Object.keys(favs).length);
    };

    listener();

    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    }
  });

  return (
      <Link className="favorites-button" to="/favorites">
        <span>View
        <span> { favoriteNumber } </span>
        { favoriteNumber === 1 ? 'Favorite' : 'Favorites'}
        </span>
      </Link>
  )
}

