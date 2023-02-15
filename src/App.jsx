import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./components/pages/Main";
import Error from "./components/pages/Error";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/shop-family" element={<Main />} />
        <Route path="/shop-family/sign-up" element={<SignUp />} />
        <Route path="/shop-family/sign-in" element={<SignIn />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="*" element={<Navigate to="/error" />} /> */}
      </Routes>
    </>
  );
}

export default App;
