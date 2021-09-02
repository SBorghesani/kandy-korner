import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from './nav/NavBar';
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./KandyKorner.css";



export const KandyKorner = () => {
    document.title = "Kandy Korner"


    return (
        <>
            <h1>Kandy Korner</h1>
            <Route
                render={() => {
                    if (localStorage.getItem("kandy_customer")) {
                        return (
                            <>
                                <NavBar />
                                <ApplicationViews />
                            </>
                        );
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />

            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>

        </>
    )

}