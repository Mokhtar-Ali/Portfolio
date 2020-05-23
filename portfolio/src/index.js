import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Projects from './components/projects'
import NavBar from './components/navbar';
import Contact from './components/contact'
import Resume from './components/resume'
import About from './components/about'

ReactDOM.render(
  <Router>
    {/* <NavBar /> */}
    <Route exact path="/" component={App} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about" component={About} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
  </Router>
  , document.getElementById('root'))
serviceWorker.unregister();