import React from "react";
import { Switch, Route } from "react-router-dom";
import BasicFetch from "./components/BasicFetch/BasicFetch";
import BasicState from "./components/BasicState/BasicState";
import InterState from "./components/InterState/InterState";

function App() {
  return (
    <Switch>
      <Route path="/basic-state">
        <BasicState />
      </Route>
      <Route path="/basic-fetch">
        <BasicFetch />
      </Route>
      <Route path="/inter-state">
        <InterState />
      </Route>
    </Switch>
  );
}

export default App;
