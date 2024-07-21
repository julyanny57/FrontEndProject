import React, {useState, useRef, useEffect} from "react";
import {Box} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {getResponseError} from ".././utils/errorUtil"
import {getRole} from ".././utils/roleUtil"

export default function Login() {

     const [username, setUser] = useState('');
     const [password, setPwd] = useState('');
     const [error, setError] = useState(null);
     const [role, setRole] = useState('');


    let navigate = useNavigate();

    // const submitHandler = async (e)=>{
    //     e.preventDefault();
    //     await axios.get("http://localhost:8080/username/"+username+"&&"+password+"").then((response) => {
    //         navigate("/circleGame");
    //     }, (error) => {
    //         console.log('error.response', error.response);
    //     });
    //     // navigate("/");
    // }

    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
            const {data} = await axios.get("http://localhost:8080/username/" + username + "&&" + password + "");

            // setRole(getRole(data));
            // switch(role) {
            //     case "circle":
            //         navigate("/circleGame");
            //     case "triangle":
            //         navigate("/triangleGame");
            //     case "none":
            //         navigate("/noGamesFound");
            //     case "admin":
            //         navigate("/mixGames");
            //     default:
            //         navigate("/");
            // }

            setRole(getRole(data));
            if(role === "circle"){
                navigate("/circleGame");
            }
            if(role === "triangle"){
                navigate("/triangleGame");
            }
            if(role === "none"){
                navigate("/noGamesFound");
            }
            if(role === "admin"){
                navigate("/mixGames");
            }

            console.log("data:", data);
        } catch (error) {
            console.log('error.response', error.response);
            setError(getResponseError(error));
        }
    }

    return (

        <Box>
            <Box style={{
                display: 'flex',
                alignItems: 'right',
                justifyContent: 'right',
                padding: '0.6rem 1.2rem',
                border: 'none',
            }}>
                <Link className="bold-text mx-2"to="/">
                    BACK
                </Link>
            </Box>

            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 40,
                    marginTop: '2rem',
                    color: '#008000',
                    fontWeight: 700,
                }}>
                Login
            </Box>
            <form onSubmit={(e) => submitHandler(e)}>
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                </Box>
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.6rem 1.2rem',
                        border: 'none',
                        width: 400,
                    }}>
                        <input
                            type={"text"}
                            id="username"
                            // ref={userRef}
                            autoComplete="off"
                            className="form-control"
                            placeholder="Enter your username"
                            name="username"
                            value={username}
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />
                    </Box>
                </Box>
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.6rem 1.2rem',
                        border: 'none',
                        width: 400,
                    }}>
                        <input
                            type={"password"}
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            name="password"
                            value={password}
                            onChange={(e) => setPwd(e.target.value)}
                            required
                        />
                    </Box>
                </Box>
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.6rem 1.2rem',
                    border: 'none',
                    color: '#F43596',
                }}>
                    {error}
                </Box>
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.6rem 1.2rem',
                    border: 'none',
                }}>
                    <button type="submit" className="btn btn-outline-primary">
                        Sign In
                    </button>
                </Box>
            </form>
        </Box>
);
}