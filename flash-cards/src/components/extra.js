import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import MenuCards from "./Menu";
import DrinkCards from "./Drinks";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/menu">
        <button>Menu test</button>
      </NavLink>
      <NavLink to="/drinks">
        <button>Drink test</button>
      </NavLink>
      <br />
      <Switch>
        <Route path="/drinks" exact component={DrinkCards} />
        <Route path="/menu" exact component={MenuCards} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;