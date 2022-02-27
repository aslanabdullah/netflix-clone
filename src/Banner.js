import React, { useEffect, useState } from "react";
import "./Banner.css";
import banner from "./assets/banner.png";

function Banner() {

    function truncate(string, n) {
        return string.length > n ? string.substr(0, n -1 ) + "...": string     
    }

    return (
        <header className="banner" style={{ 
            backgroundPosition: 'center center',
            backgroundSize: 'cover', 
            backgroundImage: `url(${banner})`
            }}>

            <div className="banner-content">
                <h1 className="banner-title">Movie Name</h1>
                <div className="banner-button">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">My List</button>
                </div>
                <h1 className="banner-description">
                    {truncate(
                        `This is a test discription This is a test discription This is a test discription This is a test discription
                        This is a test discription
                        This is a test discription
                        This is a test discription
                        This is a test discription
                        This is a test discription
                        This is a test discription
                        This is a test discription
                        This is a test discription
                        This is a test discription
                        This is a test discription
                        This is a test discription
                        This is a test discription`, 150
                    )}
                    
                </h1>
                <div className="banner-fadeBottom"></div>
            </div>

        </header>
    );
}

export default Banner;