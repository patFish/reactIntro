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
        
        <h1>Product Owner</h1>
        <img src={require("./img/productOwner.jpeg")}/>
        <h1>Customer Collaboration over contract negotiation</h1>
        <img src={require("./img/value3.jpeg")}/>
        <h1>Responding to change over following a plan</h1>
        <img src={require("./img/value4.jpeg")}/>
        <h1>1. Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</h1>
        <img src={require("./img/principle1.jpeg")}/>
        <h1>4. Business people and developers must work together daily throughout the project.</h1>
        <img src={require("./img/principle4.jpeg")}/>
        <h1>5. Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</h1>
        <img src={require("./img/principle5.jpeg")}/>
        <h1>7. Working software is the primary measure of progress.</h1>
        <img src={require("./img/principle7.jpeg")}/>
        <h1>8. Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</h1>
        <img src={require("./img/principle8.jpeg")}/>
        <h1>9. Continuous attention to technical excellence and good design enhances agility.</h1>
        <img src={require("./img/principle9.jpeg")}/>
        <h1>10. Simplicity -- the art of maximizing the amount of work not done -- is essential.</h1>
        <img src={require("./img/principle10.jpeg")}/>
        <h1>12. At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</h1>
        <img src={require("./img/principle12.jpeg")}/>

      </div>
    );
  }
}

export default App;
