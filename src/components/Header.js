import React from 'react';
import logo from '../logo.svg';

export const Header = () => (
    <header className="header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React <strong>Quizz</strong></h1>
    </header>
);