/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider } from "./utils/context";
import "./utils/style/app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/:error" element={<ErrorPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
