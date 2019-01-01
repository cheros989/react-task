import React, { Component } from "react";
import './Preloader.css';

export default class Preloader extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.isLoading ?
          <div className="preloader-bg">
            <div className="lds-dual-ring">
            </div> 
          </div> :
          null
        }
      </div>
    )
  }
}