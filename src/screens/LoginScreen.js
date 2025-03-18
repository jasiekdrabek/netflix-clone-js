import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
        <img
         className="loginScreen__logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          alt=""
        />
      <div className="loginScreen__background">
        

        <div className="loginScreen__body">
          {!signIn ? (
            <>
              <h2>Search films, tv programes and more.</h2>
              <h3>
                Ready to browse? Enter your email to create account
              </h3>
                  <button
                    className="loginScreen__gestarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
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