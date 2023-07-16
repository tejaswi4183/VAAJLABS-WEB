import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Cards';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/aboutus' component={About} />
          <Route path='/contactus' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
