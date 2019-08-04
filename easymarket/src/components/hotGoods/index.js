import React, { Component } from 'react'
import "./index.scss"
class HotGoods extends Component {
    clickRemove() {
        this.props.clickRemove()
    }
    state = {

    }
    render() {
        let { item } = this.props
        return (
            <>
                <div className="hotGoodsItem" onClick={() => this.props.history.push(`/goods/${item.id}`)} >
                    <img className="imgLazyload" src={item.list_pic_url} alt="imgLazyLoad" />
                    <div className="hotGoodsInfos">
                        <div className="hotGoodsName">{item.name}</div>
                        <div className="hotGoodsInfo">{item.goods_brief}</div>
                        <div className="hotGoodsPrice">￥{item.retail_price}</div>
                    </div>
                </div>

            </>
        )
    }
}
export default HotGoods