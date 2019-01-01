import React, { Component } from "react";
import Header from '../containers/Header';
import Preloader from '../containers/Preloader';
import Main from "./Main";

export default class App extends Component {
  render() {
    return (
      <div>
        <Preloader />
        <Header />
        <Main />
      </div>
    )
  }
}