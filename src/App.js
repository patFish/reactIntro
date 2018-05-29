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


            itemsButton2: ["../images/Sprint.png", "../images/DailyScrum.png", "../images/sprint-planning-large.jpg", "../images/PB.jpg"],
            headingButton2: ["Sprint", "Daily Scrum", "Sprint Planing", "Product Backlog"],

            itemsButton3: ["../images/Day2/Sprint3/mergingvsbranching.jpg", "../images/Day2/Sprint3/PBI.jpeg", "../images/Day2/Sprint3/Quality.jpg"],
            headingButton3: ["Git Merging Vs Banching", "Product Backlog Item", "Quality"],

            itemsButton4: ["../images/Day2/Sprint3/Agile.png", "../images/Day2/Sprint3/Estimating.jpg", "../images/Day2/Sprint3/WallEstimation.jpg"],
            headingButton4: ["SVC: Branching Strategy the Agile way", "Estimating", "Wall Estimation",],

            button1counter: 0,
            button2counter: 0,
            button3counter: 0,
            button4counter: 0,


            imageWidth: 900,

            isHiddenitem1: true,
            isHiddenitem2: true,
            isHiddenitem3: true,
            isHiddenitem4: true,

        };
        this.onButtonClick1 = this.onButtonClick1.bind(this);
        this.onButtonClick2 = this.onButtonClick2.bind(this);
        this.onButtonClick3 = this.onButtonClick3.bind(this);
        this.onButtonClick4 = this.onButtonClick4.bind(this);
        this.onIncreaseImageWidth = this.onIncreaseImageWidth.bind(this);
        this.onDecreaseImageWidth = this.onDecreaseImageWidth.bind(this);
    }

    onButtonClick1() {
        const button1counterstate = this.state.button1counter;
        this.setState({
            button1counter: (button1counterstate + 1) % this.state.headingButton1.length,
            isHiddenitem1: false,
            isHiddenitem2: true,
            isHiddenitem3:true,
            isHiddenitem4:true,
        });

    }

    onButtonClick2() {
        const button2counterstate = this.state.button2counter;
        this.setState({
            button2counter: (button2counterstate + 1) % this.state.headingButton2.length,
            isHiddenitem1: true,
            isHiddenitem2: false,
            isHiddenitem3:true,
            isHiddenitem4:true,
        });
    }

    onButtonClick3() {
        const button3counterstate = this.state.button3counter;
        this.setState({
            button3counter: (button3counterstate + 1) % this.state.headingButton3.length,
            isHiddenitem1: true,
            isHiddenitem2: true,
            isHiddenitem3:false,
            isHiddenitem4:true,
        });
    }

    onButtonClick4() {
        const button4counterstate = this.state.button4counter;
        this.setState({
            button4counter: (button4counterstate + 1) % this.state.headingButton4.length,
            isHiddenitem1: true,
            isHiddenitem2: true,
            isHiddenitem3:true,
            isHiddenitem4:false,
        });
    }

    onIncreaseImageWidth(){
        let currentImageWidth = this.state.imageWidth;
        if(currentImageWidth<900)
            currentImageWidth = 900;
        else
            currentImageWidth = (currentImageWidth+10)%1024;
        this.setState({
            imageWidth: (currentImageWidth),
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
                            <div className="col-2">
                                <input type="button" className="btn btn-primary" onClick={this.onButtonClick3} value="Sprint 3"/>
                            </div>
                            <div className="col-2">
                                <input type="button" className="btn btn-danger" onClick={this.onButtonClick4} value="Sprint 4"/>
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
                        {!this.state.isHiddenitem3 &&
                        <div>
                            {/*<input type="button" className="btn btn-primary" onClick={this.onButtonClick2} value="Sprint 2"/>*/}
                            <h3><br/><br/><br/><br/>{this.state.headingButton3[this.state.button3counter]}</h3>
                            <img width={this.state.imageWidth} src={this.state.itemsButton3[this.state.button3counter]} alt="Values 1 and 2"/>
                        </div> }
                        {!this.state.isHiddenitem4 &&
                        <div>
                            {/*<input type="button" className="btn btn-primary" onClick={this.onButtonClick2} value="Sprint 2"/>*/}
                            <h3><br/><br/><br/><br/>{this.state.headingButton4[this.state.button4counter]}</h3>
                            <img width={this.state.imageWidth} src={this.state.itemsButton4[this.state.button4counter]} alt="Values 1 and 2"/>
                        </div> }
                    </div>
                </div>
            </div>
        );
    }
}
                        
export default App;
