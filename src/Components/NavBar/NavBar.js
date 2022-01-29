import React from 'react';
//import logo from './losChichos.jpg';
import './Header.css'
import logo from './Components/NavBar/losChichos.jpg'

function NavBar() {

    return (
        <div className="NavBar">
            <header className="NavBar-header">
                <div className="header">
                    <a href="#default" className="logo"><img src={logo} width="100" height="50" alt="" /></a>

                    <div className="header-right">
                        <a className="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default NavBar;