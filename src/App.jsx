import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import Home from "./components/Home";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Asset from "./components/Asset";

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
                                <Route path="/asset/:id" component={Asset} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                    <Route component={Footer} />
                </div>
            </Router>
        );
    }
}

export default App;
