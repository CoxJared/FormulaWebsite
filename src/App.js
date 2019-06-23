import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import Home from './components/pages/Home';

function App() {
  return (
    <div className="app">
        <Home />

    </div>
  );
}

export default App;
