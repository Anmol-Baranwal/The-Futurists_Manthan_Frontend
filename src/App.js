import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const [isLoggedIn, setIsLoggedIn] = useState(
    user && user.token ? true : false
  );

  console.log(isLoggedIn);
  return (
    <div className="App">
      <Router>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Auth changeLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/signup"
              element={<Auth signup changeLoggedIn={setIsLoggedIn} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/profile/:userId/:name/:dbType"
              element={<Profile />}
            />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
