import React, { Component } from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      languages: [],
      social: []
    }
  }
  componentDidMount() {
    fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/' + this.props.currentUser)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'err')
          return
        
        this.setState({
          city: data.data.city,
          languages: data.data.languages,
          social: data.data.social
        })
      });
  }
  render() {
    console.log(this.state)
    return (
      <ListGroup>
        <div>Город: {this.state.city}</div>
        Знание языков: 
        <ListGroupItem>
          {this.state.languages.map(language => <li key={language}>{language}</li>)}
        </ListGroupItem>
        Ссылки:
        <ListGroupItem>
          {this.state.social.map(social => <li key={social.label}>{social.label}</li>)}
        </ListGroupItem>
      </ListGroup>
    )
  }
}