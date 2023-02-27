import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Main from "./components/pages/Main";
import Error from "./components/pages/Error";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import useAuth from "./hooks/auth/useAuth";
import { fetchCards } from "./store/asyncActions/cards";

function App() {
  const loading = useSelector((state) => state.auth.loading);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const getUser = useAuth();
  const dispatch = useDispatch();

  React.useEffect(() => {
    getUser();
  }, [getUser]);

  const cards = React.useCallback(async () => {
    try {
      dispatch(fetchCards());
    } catch (error) {
      console.log("Ошибка загрузки  карточек");
    }
  }, []);

  React.useEffect(() => {
    cards();
  }, []);

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
              isLoggedIn={loggedIn}
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
