import React, { useEffect, useState } from "react";
import {Box, Button} from '@mui/material';
import MyFirstComponent from "./components/MyFirstComponent";
import TitleComponent from "./components/TitleComponent";
import TriangleComponent from "./components/TriangleComponent";
import Home from "./pages/Home";
import Navbar from './layout/Navbar'
import './App.css'
import AddUser from "./users/AddUser";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App () {

    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')

    return (
            <Router>
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/adduser" element={<AddUser />} />
                    <Route exact path="/loginUser" element={<Login />} />
                    <Route exact path="/circleGame" element={<MyFirstComponent />} />
                    <Route exact path="/triangleGame" element={<TriangleComponent />} />
                </Routes>

            </Router>
                )
}

export default App;