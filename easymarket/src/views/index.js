import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { MapRouter, route } from '../router/index'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <MapRouter route={route} />
                </Switch>
            </Router>
        )
    }
}
export default App
