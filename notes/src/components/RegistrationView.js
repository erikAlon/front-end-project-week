import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './css/RegistrationView.css';
import axios from 'axios';

class RegistrationView extends Component {
  constructor() {
    super();
    this.state = {
      userField: {
        email: '',
        password: ''
      }
    };

    this.addUser = this.addUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div className="formBox">
        <div className="content">
          <p>Submit to register into the system</p>
        </div>
        <Form onSubmit={this.addUser} className="form">
          <FormGroup className="form__elem">
            <Label for="exampleEmail">Email</Label>
            <Input
              onChange={this.handleInputChange}
              type="email"
              name="email"
              value={this.state.email}
              id="exampleEmail"
              placeholder="Enter email here"
            />
          </FormGroup>
          <FormGroup className="form__elem">
            <Label for="exampleEmail">Email</Label>
            <Input
              onChange={this.handleInputChange}
              type="password"
              name="password"
              id="examplePassword"
              value={this.state.password}
              placeholder="Enter password here"
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }

  addUser(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    axios
      .post('https://git.heroku.com/mighty-peak-88675.git', user)
      .then(response => {})
      .catch();
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      userField: {
        [name]: value
      }
    });
  }
}

export default RegistrationView;
