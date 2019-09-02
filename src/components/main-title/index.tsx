import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

export const MainTitle: React.FC = () => {
  return (
    <Link className="text-center page-title" to="/">
      SWAPI-Box
    </Link>
    
  )
}

