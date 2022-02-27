import React, { useRef } from "react";
import "./SignUpScreen.css"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase";

function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const signIn = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        const result =  await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((s) => {}).catch((error) => {alert(error.message)});
    }

    return (
        <div className="signUpScreen">
            <form className="signUpScreen-from">
                <h1>Sign In</h1>
                <input ref={emailRef} className="signUpScreen-input" type="email" placeholder="Email" />
                <input ref={passwordRef} className="signUpScreen-input" type="password" placeholder="Password"/>
                <button className="signUpScreen-button" type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span style={{color: "gray"}}>New to Netflix? </span>
                    <span className="signUpScreen-link" onClick={register}>Sign Up Now</span>
                </h4>
            </form>
        </div> 
    );    
}

export default SignUpScreen;
