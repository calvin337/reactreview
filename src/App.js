import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('data :', response.data);
        this.setState({ users: response.data });
      })
      .catch(err => {
        console.log('error: ', err);
      });
  }

  mapUsers() {
    return this.state.users.map(user => {
      return <User userData={user}/>;
    });
  }

  render() {
    console.log('this.state :', this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.mapUsers()}
        </p>
      </div>
    );
  }
}

export default App;
