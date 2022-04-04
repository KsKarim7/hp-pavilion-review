import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        // <nav>
        //     <Link to="/home">HOME</Link>
        //     <Link to="/reviews">REVIEWS</Link>
        //     <Link to="/dashboard">DASHBOARD</Link>
        //     <Link to="/blogs">BLOGS</Link>
        //     <Link to="/about">ABOUT</Link>
        // </nav>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">HP</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/home">HOME</Link>
                    <Link to="/reviews">REVIEWS</Link>
                    <Link to="/dashboard">DASHBOARD</Link>
                    <Link to="/blogs">BLOGS</Link>
                    <Link to="/about">ABOUT</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;