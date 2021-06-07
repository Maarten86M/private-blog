import {
    NavLink, useHistory
} from "react-router-dom";

import '../styles.css';

function NavBar(props) {
    const history = useHistory();

    function handleogout() {
        props.toggleIsAuthenticated(false);
        history.push("/");

    }

    return (
        <>
            <nav>
                <ul className="navbar">
                    <li><NavLink to="/"> Home</NavLink></li>

                    {props.isAuthenticated && (
                        <>
                            <li><NavLink to="/blogposts">Blog Overview</NavLink></li>
                            <li>
                                <button onClick={handleogout}>Logout</button>
                            </li>
                        </>
                    )}
                    {!props.isAuthenticated && (
                        <li><NavLink to="/login">Login</NavLink></li>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default NavBar;