import React from 'react'
import {Box} from "@mui/material";
import {Button} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Home(){
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
            By By Looser!</Box>
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
        <Link  className="bold-text mx-2" to="/">Go to HOME page</Link>
            </Box>
        </Box>
    )
}