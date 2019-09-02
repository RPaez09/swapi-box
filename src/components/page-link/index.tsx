import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

interface IPageLinkProps {
  title: string;
}

export const PageLink: React.FC<IPageLinkProps> = (props) => {
  return (
    <NavLink
      activeClassName="page-link-active"
      className="btn btn-primary page-link"
      to={`/${props.title}`}>
        {props.title}
      </NavLink>   
  )
}

