import React from 'react'
import {Box} from "@mui/material";
import MyFirstComponent from ".././components/MyFirstComponent";
import TriangleComponent from ".././components/TriangleComponent";
import Slider from "../components/Slider";

export default function MixGames(){

    const data = [
        {url : "https://thumbs.dreamstime.com/b/circles-different-sizes-blue-including-large-medium-small-abstract-concept-same-shape-90076935.jpg"},
        {url : "https://www.shutterstock.com/image-illustration/3d-4-side-pyramid-red-260nw-2314348573.jpg"},
        {url : "https://www.shutterstock.com/image-vector/neon-square-frames-glowing-borders-260nw-2265046211.jpg"}
    ]

    return (
        <div>
        <div className="App">
            <Slider data = {data}/>
        </div>
        <Box>
            <MyFirstComponent/>
            <TriangleComponent/>
        </Box>
        </div>
    )
}