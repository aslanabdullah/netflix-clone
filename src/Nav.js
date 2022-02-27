import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./assets/logo.png";
import avatar from "./assets/avatar.png";

function Nav() {
    
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);            
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <div className="nav-content">
                <img className="nav-logo" src={logo} alt="" />
                <img className="nav-avatar" src={avatar} alt="" />
            </div>            
        </div>
    );
}

export default Nav;