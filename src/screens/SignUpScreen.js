import React, { useRef } from "react";
import "./SignUpScreen.css";
import db, { auth } from "../firebase";
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
        console.log(auth.currentUser);
        db.collection("User Movies list")
          .doc(auth.currentUser?.uid)
          .set({ movieList: [], tvList: [] });
        db.collection("User region")
          .doc(auth.currentUser?.uid)
          .set({ region: "US" });
        db.collection("User watch provider")
          .doc(auth.currentUser?.uid)
          .set({ watchProviderId: "8", watchProviderName: "Netflix" });
          db.collection("User avatar")
          .doc(auth.currentUser?.uid)
          .set({ avatar:"https://i.pinimg.com/564x/de/ec/1c/deec1c546541321a20403ad9cb5f5390.jpg"});

        navigate("/");
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
      <h1 className="red">THIS IS NOT REAL NETFLIX ALL USERS DATA ARE STORED IN FIREBASE</h1>
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
