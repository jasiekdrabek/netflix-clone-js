import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <div className="loginScrenn__gradient" />
      </div>

      <div className="loginScreen__body">
        {!signIn ? (
          <>
            <h1>Unlimited films, tv programes and more.</h1>
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
  );
}

export default LoginScreen;
