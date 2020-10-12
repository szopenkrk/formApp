import React, { Component } from 'react';
import './App.css';
import * as axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      userName: '',
      password: '',
      repeat: '',
      email: '',
      submited: false,
      allFieldsValidated: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleChange(event) {
    console.log(event);
    this.setState({value: event.target.value});
  }

  showError () {
    alert('Please check all fields');
  }

  sendData () {
  
      axios({
        method: 'post',
        url: 'http://localhost:3001/user/',
        headers: { 
          'Content-Type' : 'text/plain' 
        },
        data: {
          firstName: 'bar',
          userName: 'asd',
          password: 'asd',
          repeat: 'asd',
          email: 'asd',
        }
      });
    
  }
  
  render() {
    const { firstName, userName, password, repeat, email, allFieldsValidated } = this.state;
    return (
      <div>
        <label>
          First Name:
          <input 
            type="text" 
            name="firstName"  
            value={firstName}
            placeholder="Enter your name"
            onChange={this.handleChange}
          />
        </label>

        <label>
          User Name: (required)
          <input 
            type="text" 
            name="userName"  
            value={userName}
            placeholder="Enter your user name"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Password: (required)
          <input 
            type="text" 
            name="password"  
            value={password}
            placeholder="Enter your password"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Repeat Password: (required)
          <input 
            type="text" 
            name="repeat"  
            value={repeat}
            placeholder="Repeat your password"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Email: (required)
          <input 
            type="text" 
            name="email"  
            value={email}
            placeholder="Repeat your password"
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Wyślij" onClick={this.sendData} />
      </div>
    )
  }
};