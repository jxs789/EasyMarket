import React, { Component } from 'react'
import "./index.scss"
class HotGoods extends Component {
    render() {
        let { item } = this.props
        return (
            <>
                <a className="hotGoodsItem" href={`/goods/${item.id}`} >
                    <img className="imgLazyload" src={item.list_pic_url} alt="imgLazyLoad" />
                    <div className="hotGoodsInfos">
                        <div className="hotGoodsName">{item.name}</div>
                        <div className="hotGoodsInfo">{item.goods_brief}</div>
                        <div className="hotGoodsPrice">￥{item.retail_price}</div>
                    </div>
                </a>
            </>
        )
    }
}
export default HotGoods
