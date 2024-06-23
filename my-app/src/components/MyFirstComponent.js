import React, {useState} from "react";
import {Box, Button} from '@mui/material';
import Unity, { UnityContext } from "react-unity-webgl";
import Modal from 'react-modal';

const unityContext = new UnityContext({
    loaderUrl: "build/Circle/Project.loader.js",
    dataUrl: "build/Circle/Project.data",
    frameworkUrl: "build/Circle/Project.framework.js",
    codeUrl: "build/Circle/Project.wasm",
});

const MyFirstComponent = () => {
    const[visible, setVisible] = useState(false);
        return (
            <Box>
                <Box>MyFirstComponent</Box>
                <Button onClick={()=>setVisible(true)}>HERE FIRST GAME</Button>
                <Modal isOpen={visible} onRequestClose={()=>setVisible(false)}
                >
                    <h1>Circle game</h1>
                    <button onClick={()=>setVisible(false)}>Close game</button>
            <Unity
            style={{
                width: "70%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            unityContext={unityContext}/></Modal>
            </Box>);
            };

export default MyFirstComponent;