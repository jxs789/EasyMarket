import React, { Component } from 'react'
import Home from './page/home';
<<<<<<< HEAD

import Classify from "./page/classify"
import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from "react-router-dom";
=======
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
>>>>>>> 3d7ed604404b45f8e747b9423f4792097c26e9ca
// import { inject, observer } from "mobx-react"

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
<<<<<<< HEAD
                    <Route path='/' component={Home} />
=======
                    <Route path="/" component={Home} />
                    <Redirect from='/' to='/home' />
>>>>>>> 3d7ed604404b45f8e747b9423f4792097c26e9ca
                </Switch>
            </Router>
        )
    }
}
export default App
