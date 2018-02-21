import React, {Component} from 'react';
import scrumFramework from './scrumFramework.png';
import DailyScrum from './img/Overview/DailyScrum.jpg'
import DevelopmentTeam from './img/Overview/DevelopmentTeam.jpg'
import Increment from './img/Overview/Increment.jpg'
import ProductBacklog from './img/Overview/ProductBacklog.jpg'
import ProductOwner from './img/Overview/ProductOwner.jpg'
import ScrumMaster from './img/Overview/ScrumMaster.jpg'
import Sprint from './img/Overview/Sprint.jpg'
import SprintBacklog from './img/Overview/SprintBacklog.jpg'
import SprintPlanning from './img/Overview/SprintPlanning.jpg'
import SprintRetrospective from './img/Overview/SprintRetrospective.jpg'
import SprintReview from './img/Overview/SprintReview.jpg'

import './App.css';

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
                    <div id="pictures">
                        <div>
                            <h2>Daily Scrum</h2>
                            <img src={DailyScrum}/>
                        </div>
                        <div>
                            <h2>Development Team</h2>
                            <img src={DevelopmentTeam}/>
                        </div>
                        <div>
                            <h2>Increment</h2>
                            <img src={Increment}/>
                        </div>
                        <div>
                            <h2>Product Backlog</h2>
                            <img src={ProductBacklog}/>
                        </div>
                        <div>
                            <h2>Product Owner</h2>
                            <img src={ProductOwner}/>
                        </div>
                        <div>
                            <h2>Scrum Master</h2>
                            <img src={ScrumMaster}/>
                        </div>
                        <div>
                            <h2>Sprint</h2>
                            <img src={Sprint}/>
                        </div>
                        <div>
                            <h2>Sprint Backlog</h2>
                            <img src={SprintBacklog}/>
                        </div>
                        <div>
                            <h2>Sprint Planning</h2>
                            <img src={SprintPlanning}/>
                        </div>
                        <div>
                            <h2>Sprint Retrospective</h2>
                            <img src={SprintRetrospective}/>
                        </div>
                        <div>
                            <h2>Sprint Review</h2>
                            <img src={SprintReview}/>
                        </div>
                    </div>
                </p>
            </div>
        );
    }
}

export default App;
