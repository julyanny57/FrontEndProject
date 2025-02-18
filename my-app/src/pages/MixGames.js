import React, {useState} from 'react'
import {Box} from "@mui/material";
import MyFirstComponent from ".././components/MyFirstComponent";
import TriangleComponent from ".././components/TriangleComponent";
import GetCookie from "../hooks/getCookie";
import Slider from "../components/Slider";
import SquareComponent from "../components/SquareComponent";

const data = [
    {url : "https://thumbs.dreamstime.com/b/circles-different-sizes-blue-including-large-medium-small-abstract-concept-same-shape-90076935.jpg",
     gameUrl : <MyFirstComponent/>},
    {url : "https://www.shutterstock.com/image-illustration/3d-4-side-pyramid-red-260nw-2314348573.jpg",
     gameUrl : <TriangleComponent/>},
    {url : "https://www.shutterstock.com/image-vector/neon-square-frames-glowing-borders-260nw-2265046211.jpg",
     gameUrl : <SquareComponent/>}
]

export default function MixGames(){
    return (
        <Box>
            <Box className="App">
                <Slider data = {data}/>
            </Box>
            <Box className="App">
            </Box>
        </Box>
    )
}