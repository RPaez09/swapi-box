import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import './styles.css';

interface IPageLinkProps {
  title: string;
}

export const PageLink: React.FC<IPageLinkProps> = (props) => {
  return (
    <BrowserRouter>
      <Link className="btn btn-primary" to={`/${props.title}`}>
        {props.title}
      </Link>
    </BrowserRouter>
   
  )
}

