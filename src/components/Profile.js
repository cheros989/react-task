import React, { Component } from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Profile extends Component {
  componentWillMount() {
    this.props.startPreload()
  }
  componentDidMount() {
    fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/' + this.props.currentUser)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'err') {
          this.props.alert.error('You aren\'t assigned in. Fuck you.')
          this.props.history.push('/login')
          return
        }
        
        this.props.setUserData({
          city: data.data.city,
          languages: data.data.languages,
          social: data.data.social
        })
        this.props.stopPreload()
      });
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div>Город: {this.props.userData.city}</div>
        Знание языков:
        <ListGroup>
            {this.props.userData.languages.map(language => <ListGroupItem key={language}>{language}</ListGroupItem>)}
        </ListGroup>
        Ссылки:
        <ListGroup>
          {this.props.userData.social.map(social => <ListGroupItem key={social.label}>{social.label}</ListGroupItem>)}
        </ListGroup>
      </div>
    )
  }
}