import React from 'react';
import logo from '../../logo.jpg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div>
            <img className="logo" src={logo} alt=""/>
            </div>
            <nav>
                <a href="/all">All Users</a>
                <a href="/friends">Friend Users</a>
                <a href="/blocked">Blocked Users</a>
            </nav>
        </div>
    );
};

export default Header;