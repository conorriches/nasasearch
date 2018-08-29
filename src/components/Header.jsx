import React from 'react';
import { Link } from "react-router-dom";
export class Header extends React.Component {

    render() {
        return <div className="navbar navbar-dark bg-dark">
            <h3 className="masthead-brand">Stargazer</h3>
            <nav className="nav nav-masthead justify-content-center">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/404">404</Link>
            </nav>
        </div>
    }

}


export default Header;