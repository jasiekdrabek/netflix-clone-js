import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "../screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesScreen from "../screens/MoviesScreen";
import TvSeriesScreen from "../screens/TvSeriesScreen";
import PlayScreen from "../screens/PlayScreen";
import LoginScreen from "../screens/LoginScreen";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../functions/userSlice";

function App() {
  var user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsub;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/play/*" element={<PlayScreen />} />
            <Route path="/tv" element={<TvSeriesScreen />} />
            <Route path="/movie" element={<MoviesScreen />} />
            <Route path="" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
