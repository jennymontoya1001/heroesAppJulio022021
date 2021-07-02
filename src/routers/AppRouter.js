import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";

export default function App() {
  return (
    <Router>
      <div>
          <Navbar />

        <Switch>
          <Route exact path="/dc"  component={DcScreen}/>
          <Route exact path="/marvel"  component={MarvelScreen}/>
        </Switch>
      </div>
    </Router>
  );
}