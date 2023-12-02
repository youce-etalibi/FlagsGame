import React, { Fragment } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import FlagOfName from "./FlagOfName";
import NameOfFlag from "./NameOfFlag";
import Home from "./Home";
import Score from "./Score";
import './FlagsGame.css';
export default function Accueil(){
    return(
        <Fragment>
            {/* <BrowserRouter> */}
            <BrowserRouter basename="/FlagsGame">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/flagOfName" element={<FlagOfName/>}/>
                    <Route path="/NameOfFlag" element={<NameOfFlag/>}/>
                    <Route path="/:score" element={<Score/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )}