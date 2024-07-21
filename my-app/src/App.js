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
import NoGamesFound from "./pages/NoGamesFound";
import MixGames from "./pages/MixGames";
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
                    <Route exact path="/noGamesFound" element={<NoGamesFound />} />
                    <Route exact path="/circleGame" element={<MyFirstComponent />} />
                    <Route exact path="/triangleGame" element={<TriangleComponent />} />
                    <Route exact path="/mixGames" element={<MixGames />} />
                </Routes>

            </Router>
                )
}

export default App;