import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar  from './components/Layout/Navbar';
import { Alert } from './components/Layout/Alert';
import { About } from './components/Pages/About';
import User from './components/Users/User';
import GithubState from './Context/Github/GithubState';
import AlertState from './Context/Alert/AlertState';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';

const App = () => {
  document.title = 'Home';
  return (
    <GithubState>
      <AlertState>
          <Router>
            <div className='App'>
              <Navbar title="Github Finder" />
              <div className='container'>
                <Alert/>
                <Switch>
                <Route exact path='/' component={Home}/>
                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
    </GithubState>
  );
};

export default App;
