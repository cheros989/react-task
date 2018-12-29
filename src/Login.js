import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
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
    console.log(this.state.email + ' --> ' + this.state.password)
  }
}

export default Login;