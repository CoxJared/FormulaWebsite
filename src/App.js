import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Events from './components/pages/events/Events';
import Design from './components/pages/design/Design';
import Sponsors from './components/pages/sponsors/Sponsors';
import Team from './components/pages/team/Team';
import Contact from './components/pages/contact/Contact';

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
