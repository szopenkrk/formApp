import React, { Component } from 'react';
import styles from './App.css';
import ReactDOM from 'react-dom';
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
      complete: false,
      allFieldsValidated: false
    };
  }

  validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleChange = (event) => {
    console.log(event)
    // this.setState({[name]: value})
  }

  showError () {
    alert('Please check all fields');
  }

  sendData = (event) => {
    event.preventDefault();
    if(!this.state.firstName && !this.state.userName && !this.state.password && !this.state.repeat && !this.state.email) {
      this.showError()
      return null;
    } else {
      axios({
        method: 'post',
        url: 'http://localhost:3001/users',
        data: {
          firstName: this.state.firstName,
          userName: this.state.userName,
          password: this.state.password,
          repeat: this.state.repeat,
          email: this.state.email,
        }
      }).then (() => {
        this.setState({complete: true}) 
        this.forceUpdate();
      })
    }
  };
  
  
  render() {
    return (
      <div className={styles.container}>
        
        {this.state.complete ? <div className={styles.dataSend}> Proper sending data! </div> : null }
        {this.setState.error ? <div className={styles.dataSend}> Please fill form! </div> : null }
        <div className={styles.form}>
          <label className={styles.input}>
            <input 
              type="text" 
              name="firstName"  
              value={this.state.firstName}
              placeholder="First Name"
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input 
              type="text" 
              name="userName"  
              value={this.state.userName}
              placeholder="User name"
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input 
              type="text" 
              name="password"  
              value={this.state.password}
              placeholder="Your password"
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input 
              type="text" 
              name="repeat"  
              value={this.state.repeat}
              placeholder="Repeat your password"
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input 
              type="text" 
              name="email"  
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange}
            />
          </label>
          <input className={styles.sendButton} type="submit" value="Wyślij" onClick={this.sendData} />
        </div>
      </div>
    )
  }
};