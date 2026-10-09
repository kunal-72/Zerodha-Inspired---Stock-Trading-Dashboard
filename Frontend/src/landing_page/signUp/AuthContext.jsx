import React from 'react'

import { createContext, useState, useEffect } from 'react'

import axios from 'axios'

import { status } from "http-status";

import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({});




const client = axios.create({
    baseURL: "http://zerodha-backend-vq4p.onrender.com/api/users/",
    withCredentials: true
});


export const AuthProvider = ({ children }) => {

    const [userData, setuserData] = useState({})       
    

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useNavigate();

    useEffect(() => {

        const checkLogin = async () => {

            try {

                const response = await client.get("/me");

                setuserData(response.data.user);
                setIsLoggedIn(true);

            } catch (error) {

                setIsLoggedIn(false);

            }
        };

        checkLogin();

    }, []);


    const handleRegister = async (email, username, password) => {

        try {
            const request = await client.post('/register', {
                email: email,
                username: username,
                password: password,
            })

            if (request.status == status.CREATED) {

                return request.data.message
            }
        } catch (err) {
            throw err
        }

    };


    const handleLogin = async (username, password) => {
        try {

            const request = await client.post('/login', {
                username: username,
                password: password,
            })


            if (request.status == status.OK) {


                setIsLoggedIn(true);

                setTimeout(() => {
                    router('/')
                }, 2000);

                return request.data.message;
            }

        } catch (err) {
            throw err
        }
    }

    const handleLogout = async () => {
        try {
            await client.post('/logout');
            setIsLoggedIn(false);
            router('/signup')
        }catch(err){
            throw err
        }
    }


    const data = {
        userData,
        isLoggedIn,
        setuserData,
        handleRegister,
        handleLogin,
        handleLogout
    }


    return (
        <AuthContext.Provider value={data}>

            {/* Child components */}
            {children}

        </AuthContext.Provider>
    )
}





