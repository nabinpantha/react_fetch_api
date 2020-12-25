import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import FetchUser from './FetchUser'
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                  
                    <Route path="/FetchUser" component={FetchUser} />
                    
                </Switch>
            </Router>
        )
    }
}