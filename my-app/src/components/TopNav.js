import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-bootstrap";
import {Box} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';

const TopNav = () => {

    const menuData = [
        {
            path: '/',
            name: 'HOME'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/contact',
            name: 'Contact'
        },
        {
            path: '/service',
            name: 'Service'
        }
    ]


    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#home" className="brand">GameLand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            menuData.map((item) => (
                                <NavLink to={item.path} key={item.name}>
                                    <Box className="list_item">{item.name}</Box>
                                </NavLink>
                            ))
                        }
                    </Nav>
                    <Nav className="ms-auto">
                        <button className="btn btn-signup">Add User</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNav
