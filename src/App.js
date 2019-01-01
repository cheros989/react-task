import React, { Component } from "react";
import Header from './containers/Header';
import Main from "./components/Main";

export default class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Main />
      </div>
    )
  }
}