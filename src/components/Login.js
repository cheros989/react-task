import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    this.props.stopPreload()
  }

  render() {
    return (
      <Form style={{ width: '600px', margin: '20px auto' }} onSubmit={this.onFormSubmit}>
        <FormGroup>
          <Label for="email">Email: </Label>
          <Input value={this.state.email} onChange={e => this.setState({ email: e.target.value })} type="email" name="email" id="email" placeholder="fuck@you.bitch" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password: </Label>
          <Input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} type="password" name="password" id="password" placeholder="!&#@$zxcas8as1" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.startPreload()
    fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
      method: 'post',
      body: JSON.stringify({
        "email": this.state.email,
        "password": this.state.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
     }).then((response) => {
      return response.text()
     }).then((stringData) => {
      let data = JSON.parse(stringData);
      if (data.status === "ok") {
        let id = data.data.id
        this.props.authenticate(id)
        this.props.history.push('/profile')
        this.props.alert.success('Logged in.')
      } else {
        this.props.alert.error('Incorrect login or password.')
        this.props.stopPreload()
      }
     })
  }
}

export default Login;