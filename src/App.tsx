import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";
import Weather from "./pages/Weather";
import Info from "./pages/Info";
import Dashboard from "./pages/Dashboard";
import FarmingPractices from "./pages/FarmingPractices";
import Sell from "./pages/Sell";
import Market from "./pages/Market";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/info" element={<Info />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/methods" element={<FarmingPractices />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;