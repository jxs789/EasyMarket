import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import "./index.scss"
@inject("pages")
@observer
class GoodList extends Component {
    componentDidMount() {

    }
    render() {
        let { list_pic_url, name, retail_price } = this.props
        return (
            <a className="goodsItem">
                <div className="goodsItemImg">
                    <img className="imgLazyload loadEnd" src={list_pic_url} alt="imgLazyLoad" />
                </div><div className="goodsItemName">{name}</div><div className="goodsItemPrice">￥{retail_price}元</div></a>
        )

    }
}
export default GoodList;