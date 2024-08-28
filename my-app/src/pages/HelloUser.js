import React from 'react'
import {Box} from "@mui/material";
import GetCookie from "../hooks/getCookie";
import getCookie from "../hooks/getCookie";

export default function helloUser(){
    const a = GetCookie('userCookie');
    //console.log("CookieName = ", a);
    return (
        a
    )
}