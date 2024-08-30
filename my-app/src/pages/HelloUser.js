import React from 'react'
import {Box} from "@mui/material";
import GetCookie from "../hooks/getCookie";
import getCookie from "../hooks/getCookie";

export default function helloUser(){
    const userInfoJson = GetCookie('userCookie');
    var userInfoJsonParsed = JSON.parse(userInfoJson);
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
        <button type="submit" className="btn btn-outline-primary">
            Go to the games ->
        </button>
    </Box>
        </Box>
    )
}