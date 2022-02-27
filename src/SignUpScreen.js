import React from "react";
import "./SignUpScreen.css"

function SignUpScreen() {

    return (
        <div className="signUpScreen">
            <form className="signUpScreen-from">
                <h1>Sign In</h1>
                <input className="signUpScreen-input" type="email" placeholder="Email" />
                <input className="signUpScreen-input" type="password" placeholder="Password"/>
                <button className="signUpScreen-button" type="submit">Sign In</button>
                <h4>
                    <span style={{color: "gray"}}>New to Netflix? </span>
                    <span className="signUpScreen-link">Sign Up Now</span>
                </h4>
            </form>
        </div> 
    );    
}

export default SignUpScreen;
