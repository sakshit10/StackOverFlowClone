import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import AllRoutes from "./AllRoutes.jsx"
import { fetchAllQuestions } from "./actions/question";
import { useDispatch } from "react-redux";


function App() {

const dispatch = useDispatch()
useEffect(() => {
  dispatch(fetchAllQuestions())
}, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
