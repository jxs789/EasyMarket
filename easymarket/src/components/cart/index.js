import React, { Component } from 'react'
import "./index.scss"
import Footer from "../footer/index";
export default class Cart extends Component {
    render() {
        return (
            <div className="wrap cartBox">
                <div className="PageContent">
                    <ul className="serviceList">
                        <li><span>★</span>30天无忧退货</li>
                        <li><span>★</span>48小时快速退款</li>
                        <li><span>★</span>满88元免邮费</li>
                    </ul>
                    
                </div>
            </div>
        )
    }
}
