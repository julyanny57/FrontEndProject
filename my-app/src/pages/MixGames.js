import React from 'react'
import {Box} from "@mui/material";
import MyFirstComponent from ".././components/MyFirstComponent";
import TriangleComponent from ".././components/TriangleComponent";

export default function MixGames(){
    return (
        <Box>
            <MyFirstComponent/>
            <TriangleComponent/>
        </Box>
    )
}