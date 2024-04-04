import React from "react";
import desktop from "../assets/desktop.png";
import havard from "../assets/havard.png";
import airtable from "../assets/airtable.png";
import dribbble from "../assets/dribbble.png";
import boom from "../assets/boom.png";
import logo from "../assets/logo.png";

function Hero(){
    return(
        <><div className="hero">
            <img src={desktop} alt="hero-img" />
            <div className="overlay">
                <div className="navbar">
                    <h2 className="logo">BIBLIOPHILIA</h2>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div className="button">
                        <button className="primary-btn">Sign In</button>
                        <button className="secondary-btn btn">Contact Us</button>
                    </div>
                </div>
                <div className="hero-content">
                    <h1>Explore the Realm of Reading</h1>
                    <p>Discover a world of literary wonders and connect <br />with fellow book enthusiasts.</p>
                </div>

            </div>

        </div>
        <div className="sponsor-div">
                <img src={havard} alt="havard-bus" />
                <img src={airtable} alt="airtable" />
                <img src={airtable} alt="airtable" />
                <img src={havard} alt="havard-bus" />
                <img src={dribbble} alt="havard-bus" />
                <img src={dribbble} alt="havard-bus" />
                <img src={boom} alt="boom" />

        </div></>   
    )
}

export default Hero