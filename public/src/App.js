import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Search } from './container/Search/Search';
import { Recipes } from './container/Recipes/Recipes';
import { AddNew } from './container/AddNew/AddNew';
import './app.css';

export function App() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Search />
              </Route>
              <Route path="/recipes">
                <Recipes />
              </Route>
              <Route path="/add">
                <AddNew />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
