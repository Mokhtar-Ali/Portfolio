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
    <Route exact path="/" component={App} />
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />

  </Router>
  , document.getElementById('root'))
serviceWorker.unregister();