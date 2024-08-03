import React, {useState} from "react";
import {Box} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {getResponseError} from "../utils/errorUtil";

export default function AddUser() {

    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const[user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        role:"circle",
    })

    const{username, email, password} = user

    const onInputChange=(e) => {

        setUser({...user, [e.target.name]: e.target.value});

    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        try {
            const {data} = await axios.post("http://localhost:8080/adduser", user);
            //navigate("/");
            console.log("data:", data);
        }
        catch (error) {
            console.log('error.response', error.response);
            setError(getResponseError(error));
            console.log('Eroarea este: ', error);
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
                    color: '#F43596',
                }}>
                Register user
            </Box>
            <form onSubmit={(e) => onSubmit(e)}>
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
                            className="form-control"
                            placeholder="Enter your username"
                            name="username"
                            value={username}
                            onChange={(e) => onInputChange(e)}
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
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your e-mail"
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
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
                        justifyContent: 'center',
                        padding: '0.6rem 1.2rem',
                        border: 'none',
                        width: 400,
                    }}>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            value={password}
                            onChange={(e) => onInputChange(e)}
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
                        justifyContent: 'center',
                        padding: '0.6rem 1.2rem',
                        border: 'none',
                        width: 400,
                    }}>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Confirm password"
                            name="password"
                            value={password}
                            onChange={(e) => onInputChange(e)}
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
                        Submit
                    </button>
                </Box>
            </form>
        </Box>
    );
}