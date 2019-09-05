import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const FavoritesButton: React.FC = () => {
  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const favs = JSON.parse(localStorage.items || {});

  useEffect(() => {
    setFavoriteNumber(Object.keys(favs).length);
  })

  return (
      <Link to="/favorites">
        <span>View
        <span> { favoriteNumber } </span>Favorites</span>
      </Link>
  )
}

