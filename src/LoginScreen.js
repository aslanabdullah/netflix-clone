import React, { useState } from "react";
import "./LoginScreen.css"
import logo from "./assets/logo.png";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen"> 
            <div className="loginScreen-background">
                <img className="loginScreen-logo" src={logo} ></img>
                <button onClick={() => setSignIn(true)} className="loginScreen-button">Sign In</button>
                <div className="loginScreen-gradient"></div>
                <div className="loginScreen-body">
                    {signIn ? (<SignUpScreen></SignUpScreen>): (
                        <>
                            <h1>Unlimited movies, TV shows, and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen-input">
                                <form>
                                    <input type="email" placeholder="Email Address" />
                                    <button onClick={() => setSignIn(true)} className="loginScreen-getStarted">GET STARTED</button>
                                </form>                        
                            </div>
                        </>                        
                    )}
                    
                </div>
            </div>
        </div> 
    );    
}

export default LoginScreen;