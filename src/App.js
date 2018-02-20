import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardStack, Card } from 'react-cardstack';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            <CardStack className="cards">

                <Card background='#2980B9'>
                    <h1>Daily Scrum</h1>
                </Card>

                <Card background='#27AE60'>
                    <h1>Increment</h1>
                </Card>


            </CardStack>
        </p>
      </div>
    );
  }
}

export default App;
