import React, { Component } from 'react'
import { NavLink, Route } from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <div>
                <NavLink to='/home'>首页</NavLink>
                <NavLink to='/special'>专题</NavLink>
                <NavLink to='/classify'>分类</NavLink>
                <NavLink to='/shoppingCar'>购物车</NavLink>
                <NavLink to='/my'>我的</NavLink>
            </div>
        )
    }
}
export default Footer