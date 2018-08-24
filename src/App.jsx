import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import Home from "./components/Home";
import Search from "./components/Search";
import Header from "./components/Header";
import NotFound from "./components/NotFound"


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route component={Header} />
                    <div className="App row">
                        <div className="col">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/search" component={Search} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
