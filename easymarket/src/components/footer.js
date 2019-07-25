import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './style/footer.scss'
class Footer extends Component {
    render() {
        return (
            <ul>
                <li><NavLink to='/home/page'>首页</NavLink></li>
                <li><NavLink to='/home/special'>专题</NavLink></li>
                <li><NavLink to='/home/classify'>分类</NavLink></li>
                <li><NavLink to='/home/shoppingCar'>购物车</NavLink></li>
                <li><NavLink to='/home/my'>我的</NavLink></li>
            </ul>
        )
    }
}
export default Footer