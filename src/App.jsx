import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Main from "./components/pages/Main";
import Error from "./components/pages/Error";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import useAuth from "./hooks/auth/useAuth";

function App() {
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth.user);
  const getUser = useAuth();

  React.useEffect(() => {
    getUser();
  }, [getUser]);

  if (loading) {
    return null;
  }

  return (
    <>
      <Routes>
        <Route
          path="/shop-family"
          element={
            <ProtectedRoute
              isLoggedIn={user}
              redirectPath={"/shop-family/sign-in"}
            >
              <Main />
            </ProtectedRoute>
          }
        />
        <Route path="/shop-family/sign-up" element={<SignUp />} />
        <Route path="/shop-family/sign-in" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
