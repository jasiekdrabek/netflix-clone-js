import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "../screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesScreen from "../screens/MoviesScreen";
import TvSeriesScreen from "../screens/TvSeriesScreen";
import PlayScreen from "../screens/PlayScreen";
import LoginScreen from "../screens/LoginScreen";
import db, { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  logout,
  selectUser,
  getMovieList,
  getAvatar,
  getRegion,
  getWatchProvider,
} from "../functions/userSlice";
import { wait } from "@testing-library/user-event/dist/utils";
import ProfileScreen from "../screens/ProfileScreen";
import MyListScreen from "../screens/MyListScreen";
import SearchSrceen from "../screens/SearchSrceen";

function App() {
  var user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        dispatch(
          getMovieList(
            (
              await db.collection("User Movies list").doc(userAuth.uid).get()
            ).data()
          )
        );
        dispatch(
          getAvatar(
            (await db.collection("User avatar").doc(userAuth.uid).get()).data()
          )
        );
        dispatch(
          getRegion(
            (await db.collection("User region").doc(userAuth.uid).get()).data()
          )
        );
        dispatch(
          getWatchProvider(
            (
              await db.collection("User watch provider").doc(userAuth.uid).get()
            ).data()
          )
        );
        wait(1000);
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
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/myList" element={<MyListScreen />} />
            <Route path="/play/*" element={<PlayScreen />} />
            <Route path="/tv" element={<TvSeriesScreen />} />
            <Route path="/movie" element={<MoviesScreen />} />
            <Route path="" element={<HomeScreen />} />
            <Route path="/search" element={<SearchSrceen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
