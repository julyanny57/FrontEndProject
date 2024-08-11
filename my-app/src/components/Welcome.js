import React, {useState} from "react";
import {Box, Button} from '@mui/material';
import Unity, { UnityContext } from "react-unity-webgl";
import Modal from 'react-modal';

const unityContext = new UnityContext({
    loaderUrl: "build/Welcome/Build.loader.js",
    dataUrl: "build/Welcome/Build.data",
    frameworkUrl: "build/Welcome/Build.framework.js",
    codeUrl: "build/Welcome/Build.wasm",
});

const Welcome = () => {
    const[visible, setVisible] = useState(false);
    return (
        <Box>
            {/*<Box>MyFirstComponent</Box>*/}
            {/*<Button onClick={()=>setVisible(true)}>HERE FIRST GAME</Button>*/}
            {/*<Modal isOpen={visible} onRequestClose={()=>setVisible(false)}*/}
            {/*>*/}
            {/*    <h1>Circle game</h1>*/}
            {/*    <button onClick={()=>setVisible(false)}>Close game</button>*/}
                <Unity
                    style={{
                        width: "70%",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    unityContext={unityContext}/>
        {/*</Modal>*/}
         </Box>
);
};

export default Welcome;