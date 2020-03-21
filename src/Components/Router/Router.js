import React from "react";
import "./router.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBarbs from "../NavBar/NavBarbs";
import App from "../../App";
import NotFound from "../404/404";
import Scores from "../Score/Score";


const Router = () => (
  <div className="AppWrapper">
    <BrowserRouter>
      <NavBarbs checkVisibility={false}/>
      <Switch>
        <Route exact path="/" component={App} checkVisibility={false}/>
        <Route exact path="/scoredes" component={Scores} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
