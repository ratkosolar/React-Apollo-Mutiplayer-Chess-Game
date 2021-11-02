import React from "react";
import { Router } from "@reach/router";

import { Dashboard } from "../app/Dashboard";
import { History } from "../app/History";
import { Profile } from "../app/Profile";
import { Ranking } from "../app/Ranking";
import { Login } from "../app/Login";
import { SignUp } from "../app/SignUp";
import { PrivateRoute } from "../auth";

const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute component={History} path="/history" />
      <PrivateRoute component={Profile} path="/profile" />
      <PrivateRoute component={Ranking} path="/ranking" />
      <PrivateRoute component={Dashboard} default path="/" />
      <Login path="/login" />
      <SignUp path="/signup" />
    </Router>
  );
};
export default App;
