import React from "react";
import { Router } from "@reach/router";

import { Dashboard } from "../app/Dashboard";
import { History } from "../app/History";
import { Profile } from "../app/Profile";
import { Ranking } from "../app/Ranking";
import { Login } from "../app/Login";
import { SignUp } from "../app/SignUp";

const App = () => {
  return (
    <Router basepath="/app">
      <History path="/history" />
      <Profile path="/profile" />
      <Ranking path="/ranking" />
      <Login path="/login" />
      <SignUp path="/signup" />
      <Dashboard path="/" />
    </Router>
  );
};
export default App;
