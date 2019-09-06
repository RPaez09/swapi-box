import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/home/index"

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { FilmScrollText } from './components/film-scroll-text';
import { MainTitle } from './components/main-title';
import { FavoritesButton } from './components/favorites-button';
import { PageLink } from './components/page-link';

import './App.css';
import { People } from './pages/people';
import { Planets } from './pages/planets';
import { Vehicles } from './pages/vehicles';
import { Favorites } from './pages/favorites';

const App: React.FC = () => {

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={4}>
          <FilmScrollText />
        </Col>
        <Col xs={12} md={8}>

          <div className="d-flex align-items-center justify-content-center flex-column">
            <MainTitle />
            <FavoritesButton />
          </div>

          <div className="d-flex justify-content-around mb-3 mt-5 button-wrapper">
            <PageLink title={ 'people' } />
            <PageLink title={ 'planets' } />
            <PageLink title={ 'vehicles' } />
          </div>
         
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/people" exact component={ People } />
            <Route path="/planets" exact component={ Planets } />
            <Route path="/vehicles" exact component={ Vehicles } />
            <Route path="/favorites" exact component={ Favorites }/>
          </Switch>
        </Col>
      </Row>
    </Container>  
  );
}

export default App;
