import React, { Fragment } from "react";
import './FlagsGame.css'
import { Link } from "react-router-dom";
export default function Home(){
    const flags = {flag : '🇩🇰'}
    return(
        <Fragment>
            <center>
            <div className="body">
                    <section className="section-game">
                        <span id="titleGame">Flags Game <i class='bx bx-world'></i></span>
                        <div className="links">
                            <Link to='/flagOfName'>
                                <button id="flag-name">Flag of Name </button>
                            </Link>
                            <Link to='/NameOfFlag'>
                                <button id="name-flag">Name of Flag</button>
                            </Link>
                        </div>
                        <div className="anotherLinks">
                            <Link to='/'>
                                <button class="anotherBottons">ِ <i class='bx bxs-home-alt-2'></i> Capital Cities </button>
                            </Link>
                            <Link to='/'>
                                <button class="anotherBottons">ِ<i class='bx bxs-camera'></i> LANDMARKS</button>
                            </Link>
                            <Link to='/'>
                                <button class="anotherBottons"> <i class='bx bx-notepad'></i> TOUCH AND LEARN</button>
                            </Link>
                            
                        </div>
                    </section>
                </div>
            </center>
        </Fragment>
    )
}