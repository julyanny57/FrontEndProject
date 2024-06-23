import React, { useEffect, useState } from "react";
import {Box, Button} from '@mui/material';
import MyFirstComponent from "./components/MyFirstComponent";
import TitleComponent from "./components/TitleComponent";
import TriangleComponent from "./components/TriangleComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home";
import Login from './login'
import './App.css'
import AddUser from "./users/AddUser";

function App () {

    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')

    return (
        <Box>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />*/}
            {/*        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
            <AddUser/>
            {/*<TitleComponent/>*/}
            {/*    <MyFirstComponent/>*/}
            {/*    <TriangleComponent/>*/}
        </Box>
    );
}

export default App;