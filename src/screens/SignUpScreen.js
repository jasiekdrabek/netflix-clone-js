import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        // @ts-ignore
        emailRef.current.value,
        // @ts-ignore
        passwordRef.current.value
      )
      .then(() => {
        navigate("/home");
      })
      .catch((error) => alert(error));
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        // @ts-ignore
        emailRef.current.value,
        // @ts-ignore
        passwordRef.current.value
      )
      .then(() => {})
      .catch((error) => alert(error));
  };
  return (
    <div className="singUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email"></input>
        <input ref={passwordRef} type="password" placeholder="Password"></input>
        <button type="submit" onClick={signIn}>
          Submit
        </button>
        <h4>
          <span className="signUpScreen__grey">New to Netflix?</span>
          <span className="signUpScreen__link" onClick={register}>
            {" "}
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
