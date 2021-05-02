import Home from "./Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contract from "./Page/Contract/Contract";
import Resume from "./Page/Resume/Resume";
import MyProject from "./Page/MyProject/MyProject";


function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>

        <Route exact path="/home">
        <Home/>
        </Route>

        <Route exact path="/myproject">
        <MyProject/>
        </Route>

        <Route path="/contract">
        <Contract/>
        </Route>

        <Route path="/resume">
        <Resume/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
