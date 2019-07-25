import React, { Component } from 'react'
<<<<<<< HEAD
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
=======
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
>>>>>>> 3d7ed604404b45f8e747b9423f4792097c26e9ca
            </ul>
        )
    }
}
export default Footer