import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBarbs from '../NavBar/NavBarbs';
import App from "../../App";
import NotFound from "../404/404";

const Router = () => (
    <BrowserRouter>
        <NavBarbs/>
    <Switch>
        <Route exact path="/"
            // render={() =>
            // <div>
            //     <App/>
            // </div>
            component={App}
            
        />
        <Route 
            component={NotFound}
        />
    </Switch>
    </BrowserRouter>
)

export default Router;