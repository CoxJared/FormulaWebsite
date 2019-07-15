import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Events from './components/pages/events/Events';
import Sponsors from './components/pages/sponsors/Sponsors';
import Contact from './components/pages/contact/Contact';
import About from './components/pages/about/About';

function App() {
  return (
    <Router>
      <div className="app">
          <Route exact path="/" 
              component={Home} />
          <Route path="/about" 
              component={About} /> 
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
