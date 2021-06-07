import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import BlogOverview from "./pages/BlogOverview";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import NavBar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    return (
        <div className="App">
            <Router>
                <NavBar
                    isAuthenticated={isAuthenticated}
                    toggleIsAuthenticated={toggleIsAuthenticated}
                />
                <Switch>
                    <Route exact path="/">
                        <Home
                            isAuthenticated={isAuthenticated}
                        />
                    </Route>

                    <PrivateRoute
                        path="/blogposts"
                        to="/"
                        component={<BlogOverview/>}
                        isAuthenticated={isAuthenticated}
                    />

                    <PrivateRoute
                        path="/blog/:id"
                        to="/"
                        component={<Blog/>}
                        isAuthenticated={isAuthenticated}
                    />

                    <Route path="/login">
                        <Login
                            isAuthenticated={isAuthenticated}
                            toggleIsAuthenticated={toggleIsAuthenticated}
                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
