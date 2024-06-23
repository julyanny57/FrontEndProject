import React, {useState} from "react";
import {Box, Button} from '@mui/material';
import Unity, { UnityContext } from "react-unity-webgl";
import Modal from "react-modal";

const unityContext = new UnityContext({
    loaderUrl: "build/Triangles/Build.loader.js",
    dataUrl: "build/Triangles/Build.data",
    frameworkUrl: "build/Triangles/Build.framework.js",
    codeUrl: "build/Triangles/Build.wasm",
});

const TriangleComponent = () => {
    const[visible, setVisible] = useState(false);
    return (<Box>
        <Box>TriangleComponent</Box>
        <Button onClick={()=>setVisible(true)}>HERE TRIANGLE GAME</Button>
        <Modal isOpen={visible} onRequestClose={()=>setVisible(false)}
        >
            <h1>Triangle game</h1>
            <button onClick={()=>setVisible(false)}>Close game</button> <Unity
        style={{
            width: "70%",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        unityContext={unityContext}/></Modal>
    </Box>);
        };

export default TriangleComponent;