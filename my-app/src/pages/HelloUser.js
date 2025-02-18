import React, {useState} from 'react'
import {Box} from "@mui/material";
import GetCookie from "../hooks/getCookie";
import getCookie from "../hooks/getCookie";
import MixGames from "./MixGames";
import {Link, useNavigate} from "react-router-dom";
import goToYourGames from "../hooks/goToYourGames";
import {Button} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import GoToYourGames from "../hooks/goToYourGames";
import RemoveCookie from "../hooks/removeCookie";
import Logout from "../hooks/logout";

export default function HelloUser(){
    const navigate = useNavigate();
    var userInfoJsonParsed = '';
    //
    const goToGames = () => {
        <goToYourGames/>
    };

    GetCookie('userCookie') ?
        userInfoJsonParsed = JSON.parse(GetCookie('userCookie'))
        : Logout();

    // const userInfoJson = GetCookie('userCookie');
    // console.log("userInfoJson ce e in cookie = ", userInfoJson)
    // var userInfoJsonParsed = JSON.parse(userInfoJson);
    return (
        <Box>
            <Box style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 40,
                marginTop: '2rem',
                color: '#008000',
                fontWeight: 700,
            }}>Hi {userInfoJsonParsed.username}</Box>
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 40,
                    marginTop: '2rem',
                    color: '#008000',
                    fontWeight: 700,
                }}>
                Let's play!
            </Box>
            <Box style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.6rem 1.2rem',
                border: 'none',
            }}>
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.6rem 1.2rem',
                    border: 'none',
                }}>
                    <Nav className="ms-auto">
                        <Link to="/mixGames" className="btn btn-signup">Go to the games -></Link>
                    </Nav>
                </Box>
            </Box>
        </Box>
    )
}