import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Main from "./components/pages/Main";
import Error from "./components/pages/Error";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import {
  deleteUserInfoAction,
  addUserInfoAction,
  loggedInAction,
} from "./store/userReducer";
import userService from "./services/UserService";
import authService from "./services/AuthService";

import "./App.css";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    tokenCheck();
  }, []);

  const tokenCheck = async () => {
    if (localStorage.getItem("accessToken") && localStorage.getItem("userId")) {
      const id = localStorage.getItem("userId");
      const resUser = await userService.getUserById(id);
      if (!resUser) {
        //умер аксесс токен
        localStorage.clear("accessToken");
        localStorage.clear("userId");
        const resRefresh = await authService.refreshToken();
        if (resRefresh) {
          // рефшер валиден
          localStorage.setItem("accessToken", resRefresh.data.accessToken);
          localStorage.setItem("userId", resRefresh.data.userId);
          addUserInfoAction({
            userId: resRefresh.data.userId,
            email: resRefresh.data.email,
            firstName: resRefresh.data.firstName,
            lastName: resRefresh.data.lastName,
            loggedIn: resRefresh.data.loggedIn,
          });
        }
        //умер рефреш
        localStorage.clear("userId");
        localStorage.clear("accessToken");
      }
      //аксесс валиден
      dispatch(loggedInAction());
    } else {
      // нет данных в local
      const resRefresh = await authService.refreshToken();
      if (resRefresh) {
        localStorage.setItem("accessToken", resRefresh.data.accessToken);
        localStorage.setItem("userId", resRefresh.data.userId);
        addUserInfoAction({
          userId: resRefresh.data.userId,
          email: resRefresh.data.email,
          firstName: resRefresh.data.firstName,
          lastName: resRefresh.data.lastName,
          loggedIn: resRefresh.data.loggedIn,
        });
      }
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/shop-family"
          element={
            user.loggedIn ? <Main /> : <Navigate to="/shop-family/sign-in" />
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
