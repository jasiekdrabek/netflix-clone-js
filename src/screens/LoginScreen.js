import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <img
         className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        
      <div className="loginScreen__background ">
        

        <div className="loginScreen__body">
          {!signIn ? (
            <>
              <h1 className="red">
                THIS IS NOT REAL NETFLIX ALL USERS DATA ARE STORED IN FIREBASE
              </h1>
              <h2>Unlimited films, tv programes and more.</h2>
              <h2>Watch anywhere. Cancel any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <div className="loginScreen__input">
                <form>
                  <button
                    className="loginScreen__gestarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          ) : (
            <SignUpScreen />
          )}
        </div>
      </div>
      
    </div>
  );
}

export default LoginScreen;
