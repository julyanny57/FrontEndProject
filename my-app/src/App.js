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
import GameListPage from "./pages/GameListPage";
import WelcomePage from "./pages/WelcomePage";
import GoodbyPage from "./pages/GoodbyPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App () {

    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')

    const login = window.localStorage.getItem("isLoggedIn");

    return (
            <Router>
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/adduser" element={<AddUser />} />
                    <Route exact path="/loginUser" element={login ? <Home /> : <Login />} />
                    <Route exact path="/noGamesFound" element={<NoGamesFound />} />
                    <Route exact path="/circleGame" element={<MyFirstComponent />} />
                    <Route exact path="/triangleGame" element={<TriangleComponent />} />
                    <Route exact path="/mixGames" element={<MixGames />} />
                    <Route exact path="/welcomePage" element={<WelcomePage />} />
                    <Route exact path="/gameListPage" element={<GameListPage />} />
                    <Route exact path="/goodbyPage" element={<GoodbyPage />} />
                </Routes>

            </Router>
                )
}

export default App;