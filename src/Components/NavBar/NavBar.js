import React from 'react';
import logo from './losChichos.jpg';
import './Header.css'
const Header = () => {

    return (
        <div className="NavBar">
            <header className="NavBar-header">
                <img src={logo} className="NavBar-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                <div class="header-right">
                    <a class="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </header>
        </div>
    )
}