import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-bootstrap";
import {Box} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

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
                        <Link className="btn btn-signup" to="/loginUser">LOGIN</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Link className="btn btn-signup" to="/adduser">Add User</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNav
