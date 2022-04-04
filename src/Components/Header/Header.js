import React from 'react';

const Header = () => {
    return (
        <nav>
            <line to="/home">HOME</line>
            <line to="/reviews">REVIEWS</line>
            <line to="/dashboard">DASHBOARD</line>
            <line to="/blogs">BLOGS</line>
            <line to="/about">ABOUT</line>
        </nav>
    );
};

export default Header;