import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./pages/home/index"

import './App.css';


const App: React.FC = () => {

  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>      
  );
}

export default App;
