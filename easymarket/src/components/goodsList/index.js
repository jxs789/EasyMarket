import React, { Component } from 'react'
import "./index.scss"
import ImgLazyLoad from '../imgLazyLoad'

class GoodList extends Component {
    componentDidMount() {

    }
    render() {
        let { list_pic_url, name, retail_price, id } = this.props
        return (
            <a className="goodsItem" href={`/goods/${id}`}>
                <div className="goodsItemImg">
                    <ImgLazyLoad className="imgLazyload loadEnd"
                        offSetTop={44}
                        realUrl={list_pic_url}>
                    </ImgLazyLoad>
                </div><div className="goodsItemName sizeColor">{name}</div><div className="goodsItemPrice">￥{retail_price}元</div></a>
        )

    }
}
export default GoodList;