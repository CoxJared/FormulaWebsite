import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Sponsors from './components/pages/sponsors/Sponsors';
import Contact from './components/pages/contact/Contact';
import About from './components/pages/about/About';
import Recruitment from './components/pages/recruitement/Recruitment';
import donate from './components/pages/donate/donate';

class App extends Component{
  render(){
    return (

      <Router>
        <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/>
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
            <Route path="/donate" 
                component={donate} />
            <Route path='recruitment/:handle' component={donate} />
        </div>
      </Router>
    )
  }
}

export default App;
