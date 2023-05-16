import React from 'react';
import "./Navbar.css";
import { Nav, Navbar } from 'react-bootstrap';

function NavbarMenu() {
    return (
        <>
            <Navbar className="navbar-menu px-4 py-4"  expand='sm' variant='dark'>
                <Navbar.Brand href="#home">ONsoft</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger-menu" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className="mx-2 nav-link" href="#home">Home</Nav.Link>
                        <Nav.Link className="mx-2 nav-link" href="#about">About me</Nav.Link>
                        <Nav.Link className="mx-2 nav-link" href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link className="mx-2 nav-link" href="#contact">Contact</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarMenu;
