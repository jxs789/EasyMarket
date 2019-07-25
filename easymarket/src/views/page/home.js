import React, { Component } from 'react';
import {
    Route,
} from "react-router-dom";
import My from "./page/my";
import page from "./page";
import ShoppingCar from "./shoppingCar";
import Footer from '../../components/footer';
// import { inject, observer } from "mobx-react"
class Home extends Component {
    render() {

        return (
            <div>
                <Route path="/home/page" />
            </div>
        )
    }
}
export default Home
