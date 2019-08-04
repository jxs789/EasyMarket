import React, { Component } from 'react'

class NewGoods extends Component {
    render() {
        let { item } = this.props
        return (
            <div className="newGoodsItem" onClick={() => this.props.history.push(`/goods/${item.id}`)}>
                <img className="imgLazyload" src={item.list_pic_url} alt="imgLazyLoad" />
                <div className="newGoodsName">{item.name}</div>
                <div className="newGoodsPrice">￥{item.retail_price}</div>
            </div>
        )
    }
}
export default NewGoods
