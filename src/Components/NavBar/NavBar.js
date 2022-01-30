import React from 'react';
import './Header.css'
import logo from './Components/NavBar/ourLogo.png'

function NavBar() {

    return (
        <div className="NavBar">
            <header className="NavBar-header">
                <div className="header">
                    <a href="#default" className="logo"><img src={logo} width="100" height="200" alt="" /></a>

                    <div className="header-right">
                        <a className="active" href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#shop">Shop</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default NavBar;