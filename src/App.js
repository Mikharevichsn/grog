import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import BasicFetch from "./components/BasicFetch/BasicFetch";
import BasicState from "./components/BasicState/BasicState";
import InterState from "./components/InterState/InterState";
import Example from "./components/Example/Example";
import {
  ROUTE_BASIC_FETCH,
  ROUTE_BASIC_STATE,
  ROUTE_INTER_STATE,
  ROUTE_INTER_FETCH,
} from "./constants";
import style from "./App.module.css";
import InterFetch from "./components/InterFetch/InterFetch";

function App() {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Link to="/">Home</Link>
        <Link to={ROUTE_BASIC_STATE}> {ROUTE_BASIC_STATE} </Link>
        <Link to={ROUTE_BASIC_FETCH}> {ROUTE_BASIC_FETCH} </Link>
        <Link to={ROUTE_INTER_STATE}> {ROUTE_INTER_STATE} </Link>
        <Link to={ROUTE_INTER_FETCH}> {ROUTE_INTER_FETCH} </Link>
      </div>
      <div>
        <Switch>
          <Route path={ROUTE_INTER_FETCH}>
            <InterFetch />
          </Route>
          <Route path={ROUTE_BASIC_STATE}>
            <BasicState />
          </Route>
          <Route path={ROUTE_BASIC_FETCH}>
            <BasicFetch />
          </Route>
          <Route path={ROUTE_INTER_STATE}>
            <InterState />
          </Route>
          <Route to="/">
            <Example />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
