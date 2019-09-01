import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export const FavoritesButton: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/">View Favorites</Link>
    </BrowserRouter>
  )
}

