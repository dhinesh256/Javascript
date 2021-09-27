import React, { Component } from 'react';
import {BrowserRouter as Router , Switch, Route, Link , Redirect } from 'react-router-dom';
import Home from './route-components/Home';
import About from './route-components/About';
import Contact from './route-components/Contact';

class RouteTest extends Component {
  render() {
    return (
        <div>
        <h2>React Router</h2>
         <Router> 
        <nav>
          <ul>
            <li><Link to={'/'} > home </Link></li>
            <li><Link to={'/contact'} >contact</Link></li>
            <li><Link to={'/about'} >about</Link></li>
          </ul>
        </nav>
          <hr />
          <Switch>                
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
          </Router>
        </div>
    
    );
  }
}

export default RouteTest;