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

        <div id="sprint1">
        <div id="sprints-div" className="sprint">
          <h1>Sprint 1</h1>
          <div id="Agile-div">
            <h1>Product Owner</h1>
            <img src={require("./img/productOwner.jpeg")}/>
            <h1>Individuals over processes and tools</h1>
            <img src={require("./img/Values2.jpeg")}/>
            <h1>Working software over comprehensive documentation</h1>
            <img src={require("./img/Values1.jpeg")}/>
            <h1>Customer Collaboration over contract negotiation</h1>
            <img src={require("./img/value3.jpeg")}/>
            <h1>Responding to change over following a plan</h1>
            <img src={require("./img/value4.jpeg")}/>
            <h1>Principles of Agile 2, 3, 6, 11</h1>
            <img className="rotate_minus_90" src={require("./img/Principles.jpeg")}/>
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
          </div>
          </div>

          <div id="sprint2">
          <h1>Sprint 2</h1>
          <div id="scrum-div" className="sprint">
            <h1>Sprint</h1>
            <img src={require("./img/Sprint.png")}/>
            <h1>Daily Scrum</h1>
            <img src={require("./img/DailyScrum.png")}/>
            <h1>Sprint Planning</h1>
            <img src={require("./img/sprint-planning-large.jpg")}/>
            <h1>Sprint review</h1>
            <img src={require("./img/SprintReview.jpeg")}/>
            <h1>Sprint Retro</h1>
            <img src={require("./img/Sprint Retrospective.jpeg")}/>
            <h1>Product Backlog</h1>
            <img src={require("./img/PB.jpg")}/>
            <h1>Sprint Backlog</h1>
            <img src={require("./img/Sprint_Backlog.jpg")}/>
            <h1>Increment</h1>
            <img src={require("./img/SCRUM_Artifact_Increment.jpeg")}/>
          </div>
          </div>

          <div id="sprint3">
          <h1>Sprint 3</h1>
          <div id="sprintbacklog-div" className="sprint">
            <h1>Product Backlog Item</h1>
            <img src={require("./img/Day2/Sprint3/PBI.jpeg")}/>
            <h1>Product Backlog Item</h1>
            <img src={require("./img/Day2/Sprint3/PBI.jpeg")}/>
            <h1>Quality</h1>
            <img src={require("./img/Quality.jpg")}/>
            <img src={require("./img/Day2/Sprint3/Quality.jpg")}/>
            <h1>Quality</h1>
            <img src={require("./img/Quality.jpg")}/>
            <h1>Bugs</h1>
            <img src={require("./img/Bugs.jpeg")}/>
            <h1>File handling</h1>
            <img src={require("./img/FileHandling.jpeg")}/>
            <h1>Merging vs Branching</h1>
            <img src={require("./img/Day2/Sprint3/mergingvsbranching.jpg")}/>
            <h1>Scrum Task</h1>
            <img src={require("./img/Scrum-Task.jpg")}/>
          </div>
          </div>

          <div id="sprint4">
          <h1>Sprint 4</h1>
          <div id="workload-div" className="sprint">
            <h1>Communicate work: assess progress</h1>
            <img src={require("./img/progress.jpeg")}/>
            <h1>Communicate work: plan and track</h1>
            <img src={require("./img/VelocityChart.jpeg")}/>
            <img src={require("./img/StoryBoard.jpeg")}/>
            <h1>Product Backlog</h1>
            <img src={require("./img/Product-Backlog-Refinement-Evolution.jpg")}/>
            <h1>Wall Estimation</h1>
            <img src={require("./img/Day2/Sprint3/WallEstimation.jpg")}/>
            <h1>Estimating</h1>
            <img src={require("./img/Day2/Sprint3/Estimating.jpg")}/>
            <h1>Branching</h1>
            <img src={require("./img/Day2/Sprint3/Agile.png")}/>
          </div>

          <h1>Sprint 5</h1>
          <div id="merging-div" className="sprint">
            <h1>Dev Test and Practices</h1>
            <img className="rotate_minus_90" src={require("./img/Sprint5/DevTestandPractices.jpg")}/>
            <h1>Ideal Days</h1>
            <img src={require("./img/Sprint5/IdealDays.png")}/>
            <h1>Planning Poker</h1>
            <img src={require("./img/Sprint5/PlanningPoker.jpg")}/>
            <h1>Testing Compared</h1>
            <img src={require("./img/Sprint5/TestingCompared.jpeg")}/>
            <h1>Unit Test</h1>
            <img src={require("./img/Sprint5/UnitTest.png")}/>
            <h1>TDD and ATDD</h1>
            <img src={require("./img/Sprint5/tdd_atdd.jpg")}/>
            <h1>Code_Coverage</h1>
            <img src={require("./img/Sprint5/Code_Coverage.jpg")}/>
          </div>

          </div>

        </div>
      
    );
  }
}

export default App;
