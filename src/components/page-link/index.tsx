import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface IPageLinkProps {
  title: string;
}

export const PageLink: React.FC<IPageLinkProps> = (props) => {
  return (
      <Link className="btn btn-primary page-link" to={`/${props.title}`}>
        {props.title}
      </Link>   
  )
}

