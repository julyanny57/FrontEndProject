import React from 'react'
import {Box} from "@mui/material";
import Welcome from "../components/Welcome";

export default function WelcomePage(){
    return (
        <Box>
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
            Congratulations!!!!!
        </Box>

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
        You successfully passed the registration process and we are happy to welcome You in our little family of game lovers!
    </Box>

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
                Let's enjoy this journey together!!!
            </Box>
            <Box style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.6rem 1.2rem',
                border: 'none',
            }}>
                <button type="submit" className="btn btn-outline-primary">
                    Let's continue ->
                </button>
            </Box>
            <Box>
                <Welcome/>
            </Box>
        </Box>
    )
}