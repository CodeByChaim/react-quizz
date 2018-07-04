import React, {Component} from 'react';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Quiz from "./components/Quiz";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Quiz/>
        <Footer/>
      </div>
    );
  }
}

export default App;
