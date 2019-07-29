import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export default class TopGoods extends Component {
    render() {
        let { item } = this.props
        return (
            <div className="slide swiper-slide">
                <NavLink className="topGoodsItem" to={`/specialDetail/${item.id}`} >
                    <img className="imgLazyload" src={item.item_pic_url} alt="imgLazyLoad" />
                    <div className="topGoodSubTitle">{item.title} <span className="topGoodPrice">￥{item.price_info}元起</span></div>
                    <div className="topGoodsTitle">{item.subtitle}</div>
                </NavLink>
            </div >
        )
    }
}
//href={}