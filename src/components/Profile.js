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
        
        this.setState({
          city: data.data.city,
          languages: data.data.languages,
          social: data.data.social
        })
        this.props.stopPreload()
      });
  }
  render() {
    return (
      <div>
        <div>Город: {this.state.city}</div>
        Знание языков:
        <ListGroup>
            {this.state.languages.map(language => <ListGroupItem key={language}>{language}</ListGroupItem>)}
        </ListGroup>
        Ссылки:
        <ListGroup>
          {this.state.social.map(social => <ListGroupItem key={social.label}>{social.label}</ListGroupItem>)}
        </ListGroup>
      </div>
    )
  }
}