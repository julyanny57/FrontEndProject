import React, {useState} from "react";
import {Box} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {

    let navigate = useNavigate();

    const[user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const{name, username, email} = user

    const onInputChange=(e) => {

        setUser({...user, [e.target.name]: e.target.value});

    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    }

    return (
        <Box>
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
                        justifyContent: 'center'}}>
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                justifyContent: 'center',
                padding: '0.6rem 1.2rem',
                border: 'none',
                    width:400,
            }}>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                />
                </Box>
            </Box>
            <Box style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            </Box>
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
            <Box style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.6rem 1.2rem',
                border: 'none',
                width:400,
            }}>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your username"
                    name="username"
                    value={username}
                    onChange={(e)=>onInputChange(e)}
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
                width:400,
            }}>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your e-mail"
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}
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
                        Submit
                    </button>
                    <button className="btn btn-outline-danger mx-2" to="/">
                        Cancel
                    </button>
                </Box>
            </form>
        </Box>
    );
}