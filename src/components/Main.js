import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from '../containers/Login';
import Profile from '../containers/Profile';

export default class Main extends Component {
  render() {
    return (
      <main style={{width: '900px', margin: '30px auto'}}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </main>
    )
  }
}