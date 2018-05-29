import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            itemsButton1: ["../images/Values2.jpeg", "../images/Values1.jpeg", "../images/Principles.jpeg"],
            headingButton1: ["Individuals and interactions over processes and tools",
                "Working Software over comprehensive documentation",
                "Principle 2, 3, 6, 11"],
            isHiddenitem1: true,

            itemsButton2: ["../images/Sprint.png", "../images/DailyScrum.png", "../images/sprint-planning-large.jpg", "../images/PB.jpg"],
            headingButton2: ["Sprint", "Daily Scrum", "Sprint Planing", "Product Backlog"],

            button1counter: 0,
            button2counter: 0,
            imageWidth: 900,
            isHiddenitem2: true,
        };
        this.onButtonClick1 = this.onButtonClick1.bind(this);
        this.onButtonClick2 = this.onButtonClick2.bind(this);
        this.onIncreaseImageWidth = this.onIncreaseImageWidth.bind(this);
        this.onDecreaseImageWidth = this.onDecreaseImageWidth.bind(this);
    }

    onButtonClick1() {
        const button1counterstate = this.state.button1counter;
        this.setState({
            button1counter: (button1counterstate + 1) % this.state.headingButton1.length,
            isHiddenitem1: false,
            isHiddenitem2: true,
        });

    }

    onButtonClick2() {
        const button2counterstate = this.state.button2counter;
        this.setState({
            button2counter: (button2counterstate + 1) % this.state.headingButton2.length,
            isHiddenitem1: true,
            isHiddenitem2: false,
        });
    }

    onIncreaseImageWidth(){
        const currentImageWidth = this.state.imageWidth;
        this.setState({
            imageWidth: (currentImageWidth+10)%1024,
        });
    }

    onDecreaseImageWidth(){
        const currentImageWidth = this.state.imageWidth;
        this.setState({
            imageWidth: (currentImageWidth-10)%1024,
        });
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <input type="button" className="btn btn-primary float-right" onClick={this.onIncreaseImageWidth} value="Zoom In"/>
                    <input type="button" className="btn btn-success float-right" onClick={this.onDecreaseImageWidth} value="Zoom Out"/>
                    <h2>Welcome to React </h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <input type="button" className="btn btn-danger" onClick={this.onButtonClick1} value="Sprint 1"/>
                            </div>
                            <div className="col-2">
                                <input type="button" className="btn btn-success" onClick={this.onButtonClick2} value="Sprint 2"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {!this.state.isHiddenitem1 &&
                        <div>
                            {/*<input type="button" className="btn btn-primary" onClick={this.onButtonClick1} value="Sprint 1"/>*/}
                            <h3><br/><br/><br/><br/>{this.state.headingButton1[this.state.button1counter]}</h3>
                            <img width={this.state.imageWidth} src={this.state.itemsButton1[this.state.button1counter]} alt="Values 1 and 2"/>
                        </div>}
                        {!this.state.isHiddenitem2 &&
                        <div>
                            {/*<input type="button" className="btn btn-primary" onClick={this.onButtonClick2} value="Sprint 2"/>*/}
                            <h3><br/><br/><br/><br/>{this.state.headingButton2[this.state.button2counter]}</h3>
                            <img width={this.state.imageWidth} src={this.state.itemsButton2[this.state.button2counter]} alt="Values 1 and 2"/>
                        </div> }
                    </div>
                </div>
            </div>
        );
    }
}



export default App;
