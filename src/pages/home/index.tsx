import React from 'react';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { FilmScrollText } from '../../components/film-scroll-text';
import { MainTitle } from '../../components/main-title';
import { FavoritesButton } from '../../components/favorites-button';
import { PageLink } from '../../components/page-link';

export const Home: React.FC = () => {

  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <FilmScrollText/>
        </Col>
        <Col xs={12} md={9}>
          <div className="d-flex align-items-center justify-content-center">
            <MainTitle />
            <FavoritesButton />
          </div>
          <PageLink title={'people'}/>
          <PageLink title={'planets'}/>
          <PageLink title={'vehicles'}/>
        </Col>
      </Row>
    </Container>
  )
}
