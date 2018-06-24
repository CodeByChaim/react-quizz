import React, {Component} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {Quiz} from "./components/Quiz";
import Result from "./components/Result";

class App extends Component {

    constructor() {
        super();

        this.state = {
            question: 'What kind of coffee do you like drink?',
            answers: [
                'Espresso',
                'Cappuccino',
                'Latte',
                'Americano'
            ]
        }
    }

    render() {
        return (
            <div className="grid-container">
                <Header/>
                <Quiz question={this.state.question} answers={this.state.answers}/>
                <Result/>
                <Footer/>
            </div>
        );
    }
}

export default App;
