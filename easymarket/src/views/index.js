import React, { Component } from 'react'
import Home from './page/home';
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
// import { inject, observer } from "mobx-react"

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                    <Redirect from='/' to='/home' />
                </Switch>
            </Router>
        )
    }
}
export default App
