import React from 'react';
import { Link } from 'react-router-dom';

export const FavoritesButton: React.FC = () => {
  return (
      <Link to="/favorites">
        <span>View
        <span> 0 </span>Favorites</span>
      </Link>
  )
}

