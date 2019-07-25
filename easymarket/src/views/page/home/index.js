import React, { Component } from 'react'
import Footer from '../../../components/footer';
import Page from '../pages'
import Special from '../special'
import Classify from '../classify'
import ShoppingCar from '../shoppingCar'
import My from '../my'
import "./index.scss"
import { Route, Redirect } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div className='wrap'>
                <Route path="/home/page" component={Page} />
                <Route path="/home/special" component={Special} />
                <Route path="/home/classify" component={Classify} />
                <Route path="/home/shoppingCar" component={ShoppingCar} />
                <Route path="/home/my" component={My} />
                <Redirect from='/home' to='/home/page' />
                <Footer />
            </div>
        )
    }
}
export default Home
