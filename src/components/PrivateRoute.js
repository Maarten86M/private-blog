import BlogOverview from "../pages/BlogOverview";
import {Redirect, Route} from "react-router-dom";
import React from "react";

function PrivateRoute(props) {
    return (
        <Route path={props.path}>
            {props.isAuthenticated ? props.component : <Redirect to={props.to}/>}
        </Route>
    )
}

export default PrivateRoute