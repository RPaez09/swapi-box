import React from 'react';

interface IPageLinkProps {
  title: string;
}

export const PageLink: React.FC<IPageLinkProps> = (props) => {
  return (
    <button>{props.title}</button>
  )
}

