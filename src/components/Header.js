import React from 'react';
import logo from '../logo.svg';

const Header = () => (
  <header className="box header">
    <img src={logo} className="App-logo" alt="logo"/>
    <span className="App-title">Welcome to React <strong>Quizz</strong></span>
  </header>
);

export default Header;