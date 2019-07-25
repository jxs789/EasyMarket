import React, { Component } from 'react'
import Home from './page/home';
import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from "react-router-dom";
// import { inject, observer } from "mobx-react"
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Home />

                </Switch>
            </Router>
        )
    }
}
export default App
