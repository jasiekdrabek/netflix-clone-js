import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesScreen from "./screens/MoviesScreen";
import TvSeriesScreen from "./screens/TvSeriesScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/tv" element={<TvSeriesScreen />} />
          <Route path="/movie" element={<MoviesScreen />} />
          <Route path="" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
