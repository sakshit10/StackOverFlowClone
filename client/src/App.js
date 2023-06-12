import React from "react";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Home/Home"
import Auth from "./Pages/Auth/Auth"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
    </Router>
  )
}

export default App;
