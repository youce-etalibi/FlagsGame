import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Score(){
    const {score} = useParams();
    const home = useNavigate();
    return(
        <Fragment>
            <div className="body">
                <div className="section-score">
                <center>
                <img id="earth" src="Flags/earth.jpg"/>
                </center>
                <h3>this is you score : </h3>
                <h1 className="score">{score}</h1>
                <button className="great" onClick={()=>(home('/'))}><h3>Great !</h3></button>
                </div>
            </div>
        </Fragment>
    )
}