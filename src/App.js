import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Sprint 1</h1>
        <h3>Individuals and interactions over processes and tools</h3>
        <img width="300px" src="../images/Values2.jpeg" alt="Values 1 and 2"/>
        <h3>Working Software over comprehensive documentation</h3>
        <img width="300px" src="../images/Values1.jpeg" alt="Values 1 and 2"/>
        <h3>Principle 2, 3, 6, 11</h3>
        <img width="300px" src="../images/Principles.jpeg" alt="Values 1 and 2"/>

        <h1>Sprint 2</h1>

        <h3>Sprint</h3>
        <img width="900px" src="../images/Sprint.png" alt="Values 1 and 2"/>

        <h3>Daily Scrum</h3>
        <img width="900px" src="../images/DailyScrum.png" alt="Values 1 and 2"/>

        <h3>Sprint Planing</h3>
        <img width="900px" src="../images/sprint-planning-large.jpg" alt="Values 1 and 2"/>

        <h3>Product Backlog</h3>
        <img width="900px" src="../images/PB.jpg" alt="Values 1 and 2"/>
      </div>
    );
  }
}

export default App;
