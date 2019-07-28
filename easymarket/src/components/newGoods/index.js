import React, { Component } from 'react'

class NewGoods extends Component {
    render() {
        let { item } = this.props
        return (
            <a className="newGoodsItem">
                <img className="imgLazyload" src={item.list_pic_url} alt="imgLazyLoad" />
                <div className="newGoodsName">{item.name}</div>
                <div className="newGoodsPrice">￥{item.retail_price}</div>
            </a>
        )
    }
}
export default NewGoods
