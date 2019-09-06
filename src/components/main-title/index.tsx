import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const MainTitle: React.FC = () => {
  return (
    <Link className="text-center page-title" to="/">
      SWAPI-Box
    </Link>
  )
}

