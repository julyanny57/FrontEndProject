import React, {useState, useRef, useEffect} from "react";
import {Box} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsq, setErrMsq] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsq('');
    },[username, pwd])


    let navigate = useNavigate();

    const submitHandler = async (e)=>{
        e.preventDefault();
        console.log(username, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
        // await axios.post("http://localhost:8080/user", user);
        // navigate("/");
    }

    return (

        <>
            {success ? (
                <section>
                    You are login in!
                </section>
            ) : (

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
                    color: '#F43596',
                }}>
                Login
            </Box>
                <form onSubmit={submitHandler}>
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
                                ref={userRef}
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
                                value={pwd}
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
                    }}>
                        <button type="submit" className="btn btn-outline-primary">
                            Sign In
                        </button>
                    </Box>
                </form>
        </Box>
            )} </>
);
}