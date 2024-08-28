import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, Button} from "react-bootstrap";
import {Box} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RemoveCookie from "../hooks/removeCookie";

const TopNav = () => {

    const navigate = useNavigate();

    const Logout = () => {
       RemoveCookie('userCookie');
       window.localStorage.removeItem("isLoggedIn");
       window.location.reload(false);
       navigate("/goodbyPage");
    }

    // const Login = () => {
    //     window.localStorage.addItem("isLoggedIn");
    //     window.location.reload(false);
    //     navigate("/loginUser");
    // }

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
                        <Button onClick={() => Logout()} className="btn btn-signup">LOGOUT</Button>
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
