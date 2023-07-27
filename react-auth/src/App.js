import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/Home";
import SecurePage from "./pages/Secure";
import PrivateRoute from "./helpers/PrivateRoute";

import './styles/App.css';

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={<HomePage />}
          />
          <Route
            path="/secured"
            element={
              <PrivateRoute>
                <SecurePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;