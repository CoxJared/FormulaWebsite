import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Design from './components/pages/Design';
import Sponsors from './components/pages/Sponsors';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
          <Route exact path="/" 
              component={Home} />
          <Route path="/design" 
              component={Design} />
          <Route path="/team" 
              component={Team} />     
          <Route path="/events" 
              component={Events} />
          <Route path="/sponsors" 
              component={Sponsors} />
          <Route path="/contact" 
              component={Contact} />
      </div>
    </Router>
  );
}

export default App;
