import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Quiz from "./components/Quiz";
import Result from "./components/Result";

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="grid-container">
                <Header/>
                <Quiz/>
                <Result/>
                <Footer/>
            </div>
        );
    }
}

export default App;
