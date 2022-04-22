import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Header from "./components/header";
import Home from "./components/Home";
import TestChart from "./components/TestChart";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="TestChart" element={<TestChart />} />
        </Routes>
      </div>
    </Router>
  );
}
