import React, { Component } from 'react'
import { NavLink, Route } from "react-router-dom";
import "./footer.css"
class Footer extends Component {
    render() {
        return (
            <ul className="footer">
                <li>
                    <NavLink to='/home'>首页</NavLink>
                </li>
                <li>
                    <NavLink to='/special'>专题</NavLink>
                </li>
                <li>
                    <NavLink to='/classify'>分类</NavLink>
                </li>
                <li>
                    <NavLink to='/shoppingCar'>购物车</NavLink>
                </li>
                <li>
                    <NavLink to='/my'>我的</NavLink>
                </li>
            </ul>
        )
    }
}
export default Footer