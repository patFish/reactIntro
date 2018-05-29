import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>

        <div id="sprints-div" className="sprint">
          <h1>Sprint 1</h1>
          <div id="Agile-div">
            <h1>Product Owner</h1>
            <img src={require("./img/productOwner.jpeg")}/>
            <h1>Customer Collaboration over contract negotiation</h1>
            <img className="rotate_plus_90" src={require("./img/value3.jpeg")}/>
            <h1>Responding to change over following a plan</h1>
            <img className="rotate_180"src={require("./img/value4.jpeg")}/>
            <h1>1. Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</h1>
            <img className="rotate_plus_90" src={require("./img/principle1.jpeg")}/>
            <h1>4. Business people and developers must work together daily throughout the project.</h1>
            <img src={require("./img/principle4.jpeg")}/>
            <h1>5. Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</h1>
            <img src={require("./img/principle5.jpeg")}/>
            <h1>7. Working software is the primary measure of progress.</h1>
            <img src={require("./img/principle7.jpeg")}/>
            <h1>8. Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</h1>
            <img className="rotate_plus_90" src={require("./img/principle8.jpeg")}/>
            <h1>9. Continuous attention to technical excellence and good design enhances agility.</h1>
            <img className="rotate_180" src={require("./img/principle9.jpeg")}/>
            <h1>10. Simplicity -- the art of maximizing the amount of work not done -- is essential.</h1>
            <img src={require("./img/principle10.jpeg")}/>
            <h1>12. At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</h1>
            <img src={require("./img/principle12.jpeg")}/>
          </div>

          <h1>Sprint 2</h1>
          <div id="scrum-div" className="sprint">
            <h1>Sprint review</h1>
            <img src={require("./img/SprintReview.jpeg")}/>
            <h1>Sprint Retro</h1>
            <img src={require("./img/Sprint Retrospective.jpeg")}/>
            <h1>Sprint Backlog</h1>
            <img src={require("./img/Sprint_Backlog.jpg")}/>
            <h1>Increment</h1>
            <img src={require("./img/SCRUM_Artifact_Increment.jpeg")}/>
          </div>

          <h1>Sprint 3</h1>
          <div id="sprintbacklog-div" className="sprint">
            <h1>Quality</h1>
            <img src={require("./img/Quality.jpg")}/>
            <h1>Bugs</h1>
            <img src={require("./img/Bugs.jpeg")}/>
            <h1>File handling</h1>
            <img src={require("./img/FileHandling.jpeg")}/>
            <h1>Scrum Task</h1>
            <img src={require("./img/Scrum-Task.jpg")}/>
          </div>

          <h1>Sprint 4</h1>
          <div id="workload-div" className="sprint">
            <h1>Communicate work: assess progress</h1>
            <img src={require("./img/progress.jpeg")}/>
            <h1>Communicate work: plan and track</h1>
            <img src={require("./img/VelocityChart.jpeg")}/>
            <img src={require("./img/StoryBoard.jpeg")}/>
            <h1>Communicate work: PB</h1>
            <img src={require("./img/Scrum-Task.jpg")}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
