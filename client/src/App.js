import React from '../node_modules/react';
import './App.css';
import { BrowserRouter as Router,  Route } from '../node_modules/react-router-dom';

import Home from './components/pages/home/Home';
import Sponsors from './components/pages/sponsors/Sponsors';
import Contact from './components/pages/contact/Contact';
import About from './components/pages/about/About';
import Recruitment from './components/pages/recruitement/Recruitment';

function App() {
  return (
    <Router>
      <div className="app">
          <Route exact path="/" 
              component={Home} />
          <Route path="/about" 
              component={About} /> 
          <Route path="/recruitment" 
              component={Recruitment} />
          <Route path="/sponsors" 
              component={Sponsors} />
          <Route path="/contact" 
              component={Contact} />
      </div>
    </Router>
  );
}

export default App;
