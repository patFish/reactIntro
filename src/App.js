import React, { Component } from 'react';
import scrumFramework from './scrumFramework.png';
import './App.css';
import { CardStack, Card } from 'react-cardstack';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
          <div class="topnav">
              <a class="active" href="#home">Home/</a>
              <a href="#profile">Profile/</a>
              <a href="#Topics">Topics/</a>
              <a href="#Help">Help</a>
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
