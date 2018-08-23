import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import Home from "./components/Home";
import Header from "./components/Header";
import NotFound from "./components/NotFound"


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route component={Header} />
                    <div className="row">
                        <div className="col-xl-12">
                            <Switch>
                                <Route exact path="/" component={Home} />
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
